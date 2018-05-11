describe("Form input", () => {
  beforeEach(() => {
    cy.seedAndVisit();
  });
  it("visits the app", () => {
    cy.focused().should("have.class", "new-todo");
  });

  it("Accepts input", () => {
    const typedText = "New todo";

    cy
      .get(".new-todo")
      .type(typedText)
      .should("have.value", typedText);
  });
});
