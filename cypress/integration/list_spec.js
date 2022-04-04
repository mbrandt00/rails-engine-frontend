// list_spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe('Navigation', () => {
    // before( () => {
    //     cy.visit('http://localhost:3001')

    // })
    it('Can visit a page', () => {
        cy.visit('http://localhost:3001')

        cy.get('[data-cy=merchants-link]').click()
        cy.get('[data-cy=items-link]').click()
    })

})
 