Feature: Element matchers

    Element can be located using various matchers by detox

    Background: I navigate to the Counters section
        Given I tap on the Counters section by text

    @matchers @text
    Scenario: I can locate elements by text
        When I tap on the Water counter by text
        And I tap on the Electricity counter by text
        And I tap on the Gas counter by text
        Then I tap on the Broadband counter by text




    @matchers @id
    Scenario: I can locate elements by id
        When I tap on the Water counter by id
        And I tap on the Electricity counter by id
        And I tap on the Gas counter by id
        Then I tap on the Broadband counter by id




    @matchers @multiple
    Scenario: I can locate elements by multiple matchers
        When I tap on the Water counter by type and text
        And I tap on the Electricity counter by trait and text
        And I tap on the Gas counter by ancestor ID and descendant text
        Then I tap on the Broadband counter by descendant text and ancestor type
        And I tap the back button