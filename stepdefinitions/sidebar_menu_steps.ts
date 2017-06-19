import { browser } from 'protractor';
import { LoginPageObject } from '../pages/loginpage';
import { SidebarMenuPageObject } from '../pages/sidebarmenupage';
import { defineSupportCode } from 'cucumber';

let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

defineSupportCode(function ({Given, When, Then}) {
  let loginPage: LoginPageObject = new LoginPageObject();
  let sidebarMenuPage: SidebarMenuPageObject = new SidebarMenuPageObject();

  Given(/^I am logged in to Smart Response using "(.*?)" and "(.*?)"$/, async (userId: string, password: string) => {    
    loginPage.userIdTextField.sendKeys(userId);
    loginPage.passwordTextField.sendKeys(password);
     browser.actions().mouseMove(loginPage.loginButton).click();
  });

  When(/^I click on Home link$/, async () => {
    sidebarMenuPage.homeLink.click();
  });

  Then(/^I am able to see the Home Page$/, async () => {
     expect(browser.getCurrentUrl()).to.eventually.equal('http://dev.smartresponse.org/');
  });  


  When(/^I click on Ogranizations link$/, async () => {
      sidebarMenuPage.organizationsLink.click();
  });

  Then(/^I am able to see the Organizations Page$/, async () => {
     expect(browser.getCurrentUrl()).to.eventually.equal('http://dev.smartresponse.org/dashboard/organizations');
  });

  When(/^I click on Disasters link$/, async () => {
    sidebarMenuPage.disastersLink.click();
  });

  Then(/^I am able to see the Disasters Page$/, async () => {
     expect(browser.getCurrentUrl()).to.eventually.equal('http://dev.smartresponse.org/dashboard/disasters');
  });    

  When(/^I click on Services link$/, async () => {
    sidebarMenuPage.servicesLink.click();
  });

  Then(/^I am able to see the Services Page$/, async () => {
     expect(browser.getCurrentUrl()).to.eventually.equal('http://dev.smartresponse.org/dashboard/services');
  });  

  When(/^I click on Countries link$/, async () => {
    sidebarMenuPage.countriesLink.click();
  });

  Then(/^I am able to see the Countries Page$/, async () => {
     expect(browser.getCurrentUrl()).to.eventually.equal('http://dev.smartresponse.org/dashboard/countries');
  });  

  When(/^I click on Configure Lists link$/, async () => {
    sidebarMenuPage.configureListsLink.click();
  });

  Then(/^I am able to see the Configure Lists Page$/, async () => {
     expect(browser.getCurrentUrl()).to.eventually.equal('http://dev.smartresponse.org/dashboard/configure-lists');
  });  

  When(/^I click on Messages link$/, async () => {
    sidebarMenuPage.messagesLink.click();
  });

  Then(/^I am able to see the Messages Page$/, async () => {
     expect(browser.getCurrentUrl()).to.eventually.equal('http://dev.smartresponse.org/dashboard/messages');
  });  

  When(/^I click on Users link$/, async () => {
    sidebarMenuPage.usersLink.click();
  });

  Then(/^I am able to see the Users Page$/, async () => {
     expect(browser.getCurrentUrl()).to.eventually.equal('http://dev.smartresponse.org/dashboard/users');
  });  

  When(/^I click on Change Password link$/, async () => {
    sidebarMenuPage.changePasswordLink.click();
  });

  Then(/^I am able to see the Change Password Page$/, async () => {
     expect(browser.getCurrentUrl()).to.eventually.equal('http://dev.smartresponse.org/dashboard/change-password');
  });            
})

