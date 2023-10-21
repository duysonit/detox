Feature: Advanced matchers

    Elements can be matched dynamically and navigation elements can be located

    @advancedmatchers @dynamic
    Scenario: Home sections can be matched dynamically
        Given I tap on the "<section>" section

        Examples:
            | section   |
            | Counters  |
            | Members   |
            | Cities    |
            | Animation |
            | Extras    |



    @advancedmatchers @list
    Scenario: List element can be matched dynamically
        Given I tap on the 'Cities' section
        Then I tap on the "<continent>" title and image

        Examples:
            | continent  |
            | Europe     |
            | USA/Canada |
    # | Asia       |


    @advancedmatchers @headers
    Scenario: I can match elements in navigation headers
        Given I tap on the 'Members' section
        Then I tap the Add Member Icon

    @advancedmatchers @navigationtab
    Scenario: I can locate elements in the navigation tabs dynamically
        Given I tap on the "<title>" navigation tab
        Then I tap on the "<title_2>" navigation tab
        Examples:
            | title   | title_2 |
            | Cities  | Home    |
            | Members | Cities  |
            | Members | Home    |
