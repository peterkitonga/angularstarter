Feature: Header

  Background:
    Given I visit the page "/"

  Scenario: Should have a header visible

    Then I should see the "menubar" element

  Scenario: Should have a logo

    Then I should see the "logo-img" element

  Scenario: Should have an avatar icon

    Then I should see the "avatar" element

  Scenario: Should see the sign in options when I click the avatar icon

    And I click on the "avatar" element in the header
    Then I should see the "avatar-menu" element
    And I should see the "Sign In" avatar menu item
    And I should see the "Sign Up" avatar menu item
