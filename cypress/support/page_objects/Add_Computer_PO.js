const { default: Base_PO } = require("./Base_PO");

class Add_Computer_PO extends Base_PO {
  type_ComputerName(computerName) {
    cy.get("#name").type(computerName);
  }

  enter_introducedDate(introducedDate) {
    cy.get("#introduced").type(introducedDate);
  }

  enter_discontinuedDate(discontinuedDate) {
    cy.get("#discontinued").type(discontinuedDate);
  }

  select_Company(computerName) {
    cy.get("select#company").select(computerName);
  }

  clickOn_createThisComputer_button() {
    cy.get(".primary").click();
  }

  validate_required_computer_name_alert_message(expectedMessage) {
    cy.get('.clearfix').eq(0).should('contain', expectedMessage);
  }

  validate_invalid_introduced_date_alert_message(expectedMessage) {
    cy.get('.clearfix').eq(1).should('contain', expectedMessage)
  }

  validate_invalid_discontinued_date_alert_message(expectedMessage) {
    cy.get('.clearfix').eq(2).should('contain', expectedMessage)
  }
}

export default Add_Computer_PO;
