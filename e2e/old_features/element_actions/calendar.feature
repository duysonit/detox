Feature: Dates can be set in calendar

    As a user I can set a date using a calendar

    @actions @calendar
    Scenario: I can select a date from the calendar
        Given I tap on the 'Members' section
        When I tap the Add Member Icon
        Then I select 'Saturday' '30' of 'September' '2023' date in the Calendar