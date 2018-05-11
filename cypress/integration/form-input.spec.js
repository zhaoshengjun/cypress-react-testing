describe('Form input', () => {
  it('visits the app', () => {
    cy.visit('/');
    cy.focused().should('have.class', 'new-todo')
  })
})