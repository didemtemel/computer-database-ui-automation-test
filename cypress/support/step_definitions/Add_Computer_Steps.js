import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Add_Computer_PO from "../page_objects/Add_Computer_PO";

const addComputerPage = new Add_Computer_PO();

When('I type a spesific computer name {string}', (computerName) => {
  addComputerPage.type_ComputerName(computerName);
});

When('I enter a spesific introduced date {string}', (introducedDate) => {
  addComputerPage.enter_introducedDate(introducedDate);
});

When('I enter a spesific discontinued date {string}', (discontinuedDate) => {
  addComputerPage.enter_discontinuedDate(discontinuedDate);
});

When('I select a spesific company {string}', (computerName) => {
  addComputerPage.select_Company(computerName);
});

When('I click on the create this computer button', () => {
  addComputerPage.clickOn_createThisComputer_button();
})

Then('I should be presented with required computer name alert message {string}', (expectedMessage) => {
  addComputerPage.validate_required_computer_name_alert_message(expectedMessage);
})

When('I enter both introduced date {string} and discontinued date {string}', (introducedDate, discontinuedDate) => {
  addComputerPage.enter_introducedDate(introducedDate);
  addComputerPage.enter_discontinuedDate(discontinuedDate);
})

Then('I should be presented with invalid introduced date alert message which contains {string}', (expectedMessage) => {
  addComputerPage.validate_invalid_introduced_date_alert_message(expectedMessage);
})

Then('I should be presented with invalid discontinued date alert message which contains {string}', (expectedMessage) => {
  addComputerPage.validate_invalid_discontinued_date_alert_message(expectedMessage);
})

When('I click on the cancel button', () => {
  addComputerPage.clickOn_cancel_button()
})