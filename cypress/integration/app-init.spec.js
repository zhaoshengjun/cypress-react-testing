describe('App initialization', () => {
  it('Displays todos from API on load', () => {
    // stub server
    cy.server();
    cy.route('GET', '/api/todos', 'fixture:todos');

    cy.visit('/');
    cy.get('.todo-list li').should('have.length', 4)
  })
})