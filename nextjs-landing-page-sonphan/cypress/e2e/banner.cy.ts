describe("Banner Component", () => {
  beforeEach(() => {
    cy.visit("/"); // Adjust URL if needed
  });

  it("should display the banner", () => {
    cy.get("[class*=banner__container]").should("be.visible");
  });

  it("should display the footer background", () => {
    cy.get("[class*=footer__background]").should("be.visible");
  });

  it("should display the 'New' tag image", () => {
    cy.get("img").should("have.attr", "src").and("include", "new__tag.svg");
  });

  it("should have a clickable 'Shop Now' button", () => {
    cy.get('button[class*="textBlock__shopNowBtn"]')
      .should("be.visible")
      .click();
  });
});
