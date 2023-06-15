it("displays bands when skipping client-side js, confirming initial ISR", () => {
  // reference: https://glebbahmutov.com/blog/ssr-e2e/
  cy.request("/bands")
    .its("body")
    .then((html) => {
      // remove the scripts, so they dont start automatically
      const staticHtml = html.replace(/<script.*?>.*?<\/script.*?>/gm, "");
      cy.state("document").write(staticHtml);
    });

  cy.findByRole("heading", { name: /The Wandering Bunnies/i }).should("exist");
  cy.findByRole("heading", { name: /Shamrock Pete/i }).should("exist");
  cy.findByRole("heading", { name: /The Joyous Nun Riot/i }).should("exist");
});
