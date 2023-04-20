import { When } from "@badeball/cypress-cucumber-preprocessor";
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
