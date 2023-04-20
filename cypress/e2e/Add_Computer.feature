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

    Scenario Outline: Add a New Computer With Invalid Introduced Date
        And I type a spesific computer name "Hostfully Computer"
        And I enter a spesific introduced date '<introducedDate>'
        And I enter a spesific discontinued date '<discontinuedDate>'
        And I select a spesific company "RCA"
        And I click on the create this computer button
        Then I should be presented with invalid introduced date alert message which contains '<invalidDateAlertMessage>'

        Examples:
            | introducedDate | discontinuedDate | invalidDateAlertMessage        |
            | 2023-12-55     | 2024-12-12       | Invalid value for DayOfMonth   |
            | 2023-20-12     | 2024-12-12       | Invalid value for MonthOfYear  |
            | test           | 2024-12-12       | could not be parsed at index 0 |

    Scenario Outline: Add a New Computer With Invalid Discontinued Date
        And I type a spesific computer name "Hostfully Computer"
        And I enter a spesific introduced date '<introducedDate>'
        And I enter a spesific discontinued date '<discontinuedDate>'
        And I select a spesific company "RCA"
        And I click on the create this computer button
        Then I should be presented with invalid discontinued date alert message which contains '<invalidDateAlertMessage>'

        Examples:
            | introducedDate | discontinuedDate | invalidDateAlertMessage                       |
            | 2023-12-12     | 2021-12-12       | Discontinued date is before introduction date |
            | 2023-12-12     | 2024-12-55       | Invalid value for DayOfMonth                  |
            | 2023-12-12     | 2024-15-12       | Invalid value for MonthOfYear                 |
            | 2023-12-12     | test             | could not be parsed at index 0                |
