const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const { default: Base_PO } = require("../page_objects/Base_PO");
const { default: Homepage_PO } = require("../page_objects/Homepage_PO");

const basePage = new Base_PO;
const homePage = new Homepage_PO;

Given('I navigate to the computer database homepage', () => {
    basePage.navigateToHomePage();
})

When('I click on the add a new computer button', () => {
    homePage.clickOn_addNewComputer_button();
})

Then('I should be presented with succesful add a new computer message {string}', (expectedMessage) => {
    homePage.validate_add_new_computer_message(expectedMessage);
})