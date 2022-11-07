import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'http://www.baidu.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
});
