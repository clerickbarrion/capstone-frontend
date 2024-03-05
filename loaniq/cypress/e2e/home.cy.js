describe("Home", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("Slideshow Container Exists", () => {
    cy.get(".swiper-container").should("exist");
  });

  it("Navigates to Next Slide", () => {
    cy.get(".swiper-button-next").click();
    cy.get(".swiper-slide-next").should("exist");
  });

  it("Navigates to Previous Slide", () => {
    cy.get(".swiper-button-prev").click();
  });

  it("Hero Container Exists", () => {
    cy.get(".hero-container").should("exist");
  });

  it("Hero2 Container Exists", () => {
    cy.get(".hero2-container").should("exist");
  });

  it("Should Navigate to the Apply Page When the Apply is CLicked", () => {
    cy.get(".button").click();
    cy.url().should("include", "/apply");
  });
});

describe("Apply", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/apply");
  });

  it("Apply Form Exists", () => {
    cy.get(".apply-form").should("exist");
  });

  it("Apply Form Inputs Exist", () => {
    cy.get(".input").should("exist");
  });

  it("Apply Form Submit Button Exists", () => {
    cy.get(".submit-button").should("exist");
  });

  it("Route to the Home Page", () => {
    cy.get(".home-nav-item").click();
    cy.url().should("include", "/");
  });
});
