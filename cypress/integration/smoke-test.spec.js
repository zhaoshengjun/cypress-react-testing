describe("Smoke tests", () => {
  beforeEach(() => {
    cy.request("DELETE", "/api/todos/all");
  });
  context("No todos", () => {
    it("Adds a new todo", () => {
      cy.server();
      cy.route("POST", "/api/todos").as("save");
      cy.visit("/");
      cy
        .get(".new-todo")
        .type("New todo")
        .type("{enter}");
      cy.wait("@save");
      cy.get(".todo-list li").should("have.length", 1);
    });
  });
});
