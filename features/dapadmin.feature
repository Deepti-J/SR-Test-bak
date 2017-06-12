Feature: Smart Response Login Pages
  As a Admin of the DAP
  I would like login to Smart Response portal
  So that I can perform other activities


  Scenario: Test SmartResponse Login Page
    Given The Smart Response Page is open
    When I click on Login
    Then I am shown the login page

  Scenario: Login to SmartResponse
    Given The Smart Response Login Page is open
     When I enter sr_admin@smartresponse.org and test#1
     Then I successfully login and show the dashboard
     And I successfully logout

  Scenario: Check Home Page after Login to SmartResponse
    Given I am logged in to Smart Response using sr_admin@smartresponse.org and test#1
    When I click on Home link
    Then I am able to see the Home Page

  Scenario: Check Organizations Page after Login to SmartResponse
    When I click on Ogranizations link
    Then I am able to see the Organizations Page

  Scenario: Check Disasters Page after Login to SmartResponse
    When I click on Disasters link
    Then I am able to see the Disasters Page