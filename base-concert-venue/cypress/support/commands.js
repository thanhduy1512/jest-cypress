import "@testing-library/cypress/add-commands";

Cypress.Commands.add("resetDBAndClearISRCache", () => {
  cy.task("db:reset");
  const secret = Cypress.env("REVALIDATION_SECRET");
  cy.request("GET", `/api/revalidate?secret=${encodeURIComponent(secret)}`);
});
