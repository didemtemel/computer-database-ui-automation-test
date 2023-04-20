const { default: Base_PO } = require("./Base_PO");

class Homepage_PO extends Base_PO {
  clickOn_addNewComputer_button() {
    cy.get("#add").click();
  }

  validate_add_new_computer_message(expectedMessage){
    cy.get('.alert-message.warning').should('have.text', expectedMessage);
  }
}

export default Homepage_PO;
