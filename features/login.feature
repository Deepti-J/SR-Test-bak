Feature: Smart Response Login Pages
  As a Admin of the DAP
  I would like login to Smart Response portal
  So that I can perform other activities

  @LoginScenario
  Scenario: Test SmartResponse Login Page
    Given The Smart Response Page is open
    When I click on Login
    Then I am shown the login page
  
  @LoginScenario
  Scenario: Login to SmartResponse
    Given The Smart Response Login Page is open
     When I enter "sr_admin@smartresponse.org" and "test#1"
     Then I successfully login and show the dashboard
     And I successfully logout