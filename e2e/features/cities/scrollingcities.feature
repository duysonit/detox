Feature: Cities' image are displayed correctly an scrollable

    I can view the image and and label from 4 cities

    Background: I can navigate to the cities screen

        Given I tap on the "Cities" Home section

    @cities @navigation
    Scenario: The cities screen is correctly displayed
        When the Cities page is correctly displayed
        And I tap the back button
        Then the Home page is correctly displayed


    @cities @scrolling
    Scenario Outline: I can scroll through images in the different continents
        When I scroll "<continent>" "<direction>" to image number <number>
        Then I scroll "<continent>" "<direction_2>" to image number <number_2>

        Examples:
            | continent  | direction | number | direction_2 | number_2 |
            | Europe     | right     | 4      | left        | 2        |
            | USA/Canada | right     | 3      | left        | 1        |
            | Asia       | right     | 4      | left        | 1        |