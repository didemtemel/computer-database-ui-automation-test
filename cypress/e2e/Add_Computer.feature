Feature: Computer Database - Add Computer Page

    Background: Pre conditions
        Given I navigate to the computer database homepage
        When I click on the add a new computer button

    Scenario: Add a New Computer
        And I type a spesific computer name "Hostfully Computer"
        And I enter a spesific introduced date "2022-12-12"
        And I enter a spesific discontinued date "2023-12-12"
        And I select a spesific company "RCA"
        And I click on the create this computer button
        Then I should be presented with succesful add a new computer message "Done !  Computer Hostfully Computer has been created"

    Scenario: Add a New Computer Without Computer Name
        And I enter a spesific introduced date "2022-12-12"
        And I enter a spesific discontinued date "2023-12-12"
        And I select a spesific company "RCA"
        And I click on the create this computer button
        Then I should be presented with required computer name alert message "Failed to refine type : Predicate isEmpty() did not fail."    