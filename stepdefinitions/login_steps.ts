import { browser } from 'protractor';
import { LoginPageObject } from '../pages/loginpage';
import { defineSupportCode } from 'cucumber';
import { SidebarMenuPageObject } from '../pages/sidebarmenupage';

let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

defineSupportCode(function ({Given, When, Then}) {
  let loginPage: LoginPageObject = new LoginPageObject();
  let sidebarMenuPage: SidebarMenuPageObject = new SidebarMenuPageObject();

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

  When(/^I enter "(.*?)" and "(.*?)" and "(.*?)"$/, async (userId: string, password: string, success: string) => {    

    loginPage.clearFieldValues();
    
    await loginPage.userIdTextField.sendKeys(userId);
    await loginPage.passwordTextField.sendKeys(password);
    await browser.actions().mouseMove(loginPage.loginButton).click();
    
    if(success === 'true') {
        console.log('inside true');
        expect(browser.getCurrentUrl()).to.eventually.equal('http://dev.smartresponse.org/dashboard');
    }
    else {
        console.log('inside false');
        expect(await loginPage.getInvalidCredentialsMessage().getText()).to.eventually.equal('Incorrect login information');
    }
  });

  Then(/^I successfully logout$/, async () => {
    sidebarMenuPage.logoutLink.click();
     expect(browser.getCurrentUrl()).to.eventually.equal('http://dev.smartresponse.org');
     loginPage.clearFieldValues();
  }); 

})

