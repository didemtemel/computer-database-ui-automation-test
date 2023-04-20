class Base_PO {
  navigateToHomePage() {
    cy.visit("http://computer-database.gatling.io/computers");
  }
}

export default Base_PO;
