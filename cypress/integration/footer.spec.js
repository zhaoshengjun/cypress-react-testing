describe("Footer", () => {
  it("Filters todos", () => {
    cy.seedAndVisit("fixture:mixed_todos");
    cy.contains("Active").click();
    cy.get(".todo-list li").should("have.length", 2);
  });
});
