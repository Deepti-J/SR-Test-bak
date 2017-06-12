var SmartResponseLoginSteps = function() {

  var SmartResponseLoginPage = require("../pages/smartresponse_loginpage.js");

  this.World = function SmartResponse() {
    this.page = new SmartResponseLoginPage();
  };


  this.Given('The Smart Response Page is open', function () {
    this.page.get();
  });

 this.When('I click on Login', function () {
   this.page.clickLoginLink();
  });

  this.Then('I am shown the login page', function () {
      expect(this.page.getLoginPageResult()).to.eventually.equal('http://dev.smartresponse.org/login');
   });



  this.Given('The Smart Response Login Page is open', function (callback) {
    this.page.getLogin();
    callback();
  });

//Need to parameterize this so that multiple tests can be run for different scenarios
 this.When('I enter $userId and $password', function (userId, password, callback) {
   this.page.setUserId(userId);
   this.page.setPassword(password);
   this.page.clickLogin();
    callback();
  });

  this.Then('I successfully login and show the dashboard', function (callback) {
      expect(this.page.getLoginClickResult()).to.eventually.equal('http://dev.smartresponse.org/dashboard');
      callback();
   });

     this.Then('I successfully logout', function (callback) {
         this.page.clickLogout();
         expect(this.page.getLogoutClickResult()).to.eventually.equal('http://dev.smartresponse.org/');
         callback();
      });


this.Given('I am logged in to Smart Response using $userId and $password', function (userId,
password, callback) {
   this.page.getLogin();
   this.page.setUserId(userId);
   this.page.setPassword(password);
   this.page.clickLogin();
   expect(this.page.getLoginClickResult()).to.eventually.equal('http://dev.smartresponse.org/dashboard');
    callback();
  });


 this.When('I click on Home link', function () {
   this.page.clickHomeLink();
  });

  this.Then('I am able to see the Home Page', function () {
      expect(this.page.getLoginPageResult()).to.eventually.equal('http://dev.smartresponse.org/');
   });

 this.When('I click on Ogranizations link', function () {
   this.page.clickOrganizationsLink();
  });

  this.Then('I am able to see the Organizations Page', function () {
      expect(this.page.getLoginPageResult()).to.eventually.equal('http://dev.smartresponse.org/dashboard/organizations');
   });

 this.When('I click on Disasters link', function () {
   this.page.clickDisastersLink();
  });

  this.Then('I am able to see the Disasters Page', function () {
      expect(this.page.getLoginPageResult()).to.eventually.equal('http://dev.smartresponse.org/dashboard/disasters');
   });

};

module.exports = SmartResponseLoginSteps;