import { generateNewBand } from "../../__tests__/__mocks__/fakeData/newBand";
import { generateNewShow } from "../../__tests__/__mocks__/fakeData/newShow";
import { generateRandomId } from "../../lib/features/reservations/utils";

it("should load refreshed page from cache after new band is added", () => {
  // check that new band is not on page
  cy.task("db:reset").visit("/bands");
  cy.findByRole("heading", { name: /Avalanche of Cheese/i }).should(
    "not.exist"
  );
  // add new band via post request to api
  const newBandId = generateRandomId();
  const newBand = generateNewBand(newBandId);
  const secret = Cypress.env("REVALIDATION_SECRET");
  cy.request("POST", `/api/bands?secret=${encodeURIComponent(secret)}`, {
    newBand,
  }).then((res) => {
    expect(res.body.revalidated).to.eq(true);
  });
  // reload page; new band should appear
  cy.reload();
  cy.findByRole("heading", { name: /Avalanche of Cheese/i }).should("exist");

  // reset ISR cache to initial db conditions
  cy.resetDBAndClearISRCache();
});

it("should load refreshed page from cache after new show is added", () => {
  // check that new show is not on page
  cy.task("db:reset").visit("/shows");
  cy.findByRole("heading", { name: /Avalanche of Cheese/i }).should(
    "not.exist"
  );
  // add new show via post request to api
  const newShowId = generateRandomId();
  const newShow = generateNewShow(newShowId);
  const secret = Cypress.env("REVALIDATION_SECRET");
  cy.request("POST", `/api/shows?secret=${encodeURIComponent(secret)}`, {
    newShow,
  }).then((res) => {
    expect(res.body.revalidated).to.eq(true);
  });
  // reload page; new show should appear
  cy.reload();
  cy.findByRole("heading", { name: /Avalanche of Cheese/i }).should("exist");
  // reset ISR cache to initial db conditions
  cy.resetDBAndClearISRCache();
});
