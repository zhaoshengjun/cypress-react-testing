describe('App initialization', () => {
  it('Displays todos from API on load', () => {
    cy.visit('/');
    cy.get('.todo-list li').should('have.length', 4)
  })
})