import { browser } from 'protractor';
import { LoginPageObject } from '../pages/loginpage';
import { defineSupportCode } from 'cucumber';

let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

defineSupportCode(function ({Given, When, Then}) {
  let loginPage: LoginPageObject = new LoginPageObject();

  Given(/^The Smart Response Page is open$/, async () => {
      expect(await browser.getTitle()).to.equal('SmartResponse | Disaster Relief Accountability');
  });

  When(/^I click on Login$/, async () => {
    return  loginPage.loginLink.click();
  });

  Then(/^I am shown the login page$/, async () => {
     expect(browser.getCurrentUrl()).to.eventually.equal('http://dev.smartresponse.org/login');
  });


   Given(/^The Smart Response Login Page is open$/, async () => {
      return loginPage.loginLink.click();   
   });

  When(/^I enter "(.*?)" and "(.*?)"$/, async (userId: string, password: string) => {    
    loginPage.userIdTextField.sendKeys(userId);
    loginPage.passwordTextField.sendKeys(password);
    browser.actions().mouseMove(loginPage.loginButton).click();
  });

  Then(/^I successfully login and show the dashboard$/, async () => {
     expect(browser.getCurrentUrl()).to.eventually.equal('http://dev.smartresponse.org/dashboard');
  });

  Then(/^I successfully logout$/, async () => {
    loginPage.logoutLink.click();
     expect(browser.getCurrentUrl()).to.eventually.equal('http://dev.smartresponse.org');
     loginPage.clearFieldValues();
  });

  Given(/^I am logged in to Smart Response using "(.*?)" and "(.*?)"$/, async (userId: string, password: string) => {    
    loginPage.userIdTextField.sendKeys(userId);
    loginPage.passwordTextField.sendKeys(password);
     browser.actions().mouseMove(loginPage.loginButton).click();
  });

  When(/^I click on Home link$/, async () => {
    loginPage.homeLink.click();
  });

  Then(/^I am able to see the Home Page$/, async () => {
     expect(browser.getCurrentUrl()).to.eventually.equal('http://dev.smartresponse.org/');
  });  


  When(/^I click on Ogranizations link$/, async () => {
      loginPage.organizationsLink.click();
  });

  Then(/^I am able to see the Organizations Page$/, async () => {
     expect(browser.getCurrentUrl()).to.eventually.equal('http://dev.smartresponse.org/dashboard/organizations');
  });

  When(/^I click on Disasters link$/, async () => {
    loginPage.disastersLink.click();
  });

  Then(/^I am able to see the Disasters Page$/, async () => {
     expect(browser.getCurrentUrl()).to.eventually.equal('http://dev.smartresponse.org/dashboard/disasters');
  });    

})

