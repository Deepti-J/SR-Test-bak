Feature: Smart Response Sidebar Menu Pages
  As a User of the DAP
  I would like login to Smart Response portal
  So that I can test the sidebar menu links

  
  @SidebarMenuScenario
  Scenario: Check Home Page after Login to SmartResponse
    Given I am logged in to Smart Response using "sr_admin@smartresponse.org" and "test#1"
    When I click on Home link
    Then I am able to see the Home Page

  @SidebarMenuScenario
  Scenario: Check Organizations Page after Login to SmartResponse
    When I click on Ogranizations link
    Then I am able to see the Organizations Page

  @SidebarMenuScenario
  Scenario: Check Disasters Page after Login to SmartResponse
    When I click on Disasters link
    Then I am able to see the Disasters Page

  @SidebarMenuScenario
  Scenario: Check Services Page after Login to SmartResponse
    When I click on Services link
    Then I am able to see the Services Page

  @SidebarMenuScenario
  Scenario: Check Countries Page after Login to SmartResponse
    When I click on Countries link
    Then I am able to see the Countries Page

  @SidebarMenuScenario
  Scenario: Check Configure Lists Page after Login to SmartResponse
    When I click on Configure Lists link
    Then I am able to see the Configure Lists Page

  @SidebarMenuScenario
  Scenario: Check Messages Page after Login to SmartResponse
    When I click on Messages link
    Then I am able to see the Messages Page  

  @SidebarMenuScenario
  Scenario: Check User Management Page after Login to SmartResponse
    When I click on Users link
    Then I am able to see the Users Page          

  @SidebarMenuScenario
  Scenario: Check Change Password Page after Login to SmartResponse
    When I click on Change Password link
    Then I am able to see the Change Password Page  