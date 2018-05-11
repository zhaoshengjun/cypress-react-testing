describe('Form input', () => {
  it('visits the app', () => {
    cy.visit('/');
    cy.focused().should('have.class', 'new-todo')
  })

  it.only('Accepts input', () => {
    const typedText = 'New todo'
    cy.visit('/')
    cy.get('.new-todo').type(typedText).should('have.value', typedText)
  })
})