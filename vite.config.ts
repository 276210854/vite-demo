import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: 'modules',
    //打包文件目录
    outDir: "es",
    //压缩
    minify: false,
    //css分离
    //cssCodeSplit: true,
    rollupOptions: {
        //忽略打包vue文件
        external: ['react'],
        input: ['src/package/index.ts'],
        output: [
            {
                format: 'es',
                //不用打包成.es.js,这里我们想把它打包成.js
                entryFileNames: '[name].js',
                //让打包目录和我们目录对应
                preserveModules: true,
                //配置打包根目录
                dir: 'dist/esm',
                preserveModulesRoot: 'src'
            },
            {
                format: 'cjs',
                entryFileNames: '[name].js',
                //让打包目录和我们目录对应
                preserveModules: true,
                //配置打包根目录
                dir: 'dist/cjs',
                preserveModulesRoot: 'src'
            }
        ]
    },
    lib: {
        entry: './src/package/index.ts',
        formats: ['es', 'cjs']
    }
  },
  plugins: [
    react(),
    //因为这个插件默认打包到es下，我们想让lib目录下也生成声明文件需要再配置一个
    // dts({
    //   //指定使用的tsconfig.json为我们整个项目根目录下掉,如果不配置,你也可以在components下新建tsconfig.json
    //   tsConfigFilePath: './tsconfig.json'
    // }),
    dts({
      outputDir: 'dist/esm',
      tsConfigFilePath: './tsconfig.json'
    }),
    dts({
        outputDir: 'dist/cjs',
        tsConfigFilePath: './tsconfig.json'
    })
  ]
})

