describe('My First Test', () => {
    it('Visits the Kitchen Sink', () => {
      cy.visit('https://example.cypress.io')
    })
    it('finds the content "type"', () => {
        cy.visit('https://example.cypress.io')
    
        cy.contains('type')
    })
    it('clicks the link "type"', () => {
        cy.visit('https://example.cypress.io')

        cy.contains('type').click()
    })
    it('clicking "type" navigates to a new url', () => {
        cy.visit('https://example.cypress.io')
    
        cy.contains('type').click()
    
        // Should be on a new URL which
        // includes '/commands/actions'
        cy.url().should('include', '/commands/actions')
    })
    it('Gets, types and asserts', () => {
        cy.visit('https://example.cypress.io')
    
        cy.contains('type').click()
    
        // Should be on a new URL which
        // includes '/commands/actions'
        cy.url().should('include', '/commands/actions')
    
        // Get an input, type into it and verify
        // that the value has been updated
        // the best like cy.get('[data-cy="submit"]').click()	data-xx to select elements
        cy.get('.action-email')
          .type('fake@email.com')
          .should('have.value', 'fake@email.com')
    })
})