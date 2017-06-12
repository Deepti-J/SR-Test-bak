var SmartResponseLoginPage = function() {

  this.get = function() {
    browser.get('http://dev.smartresponse.org');
  };

  this.getLogin = function() {
    browser.get('http://dev.smartresponse.org/login');
  };

  this.clickLoginLink = function() {
  //Need to use find by Partiallink text since the text is having some spaces. Check this using
  //Developer tools.
        browser.driver.findElement(By.partialLinkText("Login")).click();
          return browser.driver.wait(function() {
                  return browser.driver.getCurrentUrl().then(function(url) {
                         return /login/.test(url);
                   });
           }, 10000);
  }

    this.getLoginPageResult = function() {
      return browser.driver.getCurrentUrl();
    };

  this.clickLogin = function() {
        element(by.id('login_button')).click();
        return browser.driver.wait(function() {
                return browser.driver.getCurrentUrl().then(function(url) {
                       return /dashboard/.test(url);
                 });
         }, 10000);
  };

  this.clickLogout = function() {
        browser.driver.findElement(By.partialLinkText("Logout")).click();
    };


  this.setUserId = function(value) {
      element(by.id('email')).sendKeys(value);
    };

    this.setPassword = function(value) {
      element(by.id('password')).sendKeys(value);
    };



  this.getLoginClickResult = function() {
    return browser.driver.getCurrentUrl();
  };

  this.getLogoutClickResult = function() {
    return browser.driver.getCurrentUrl();
  };

  this.clickHomeLink = function() {
        browser.driver.findElement(By.partialLinkText("Home")).click();
  }

  this.clickOrganizationsLink = function() {
        browser.driver.findElement(By.partialLinkText("Organizations")).click();
        return browser.driver.wait(function() {
                return browser.driver.getCurrentUrl().then(function(url) {
                       return /organizations/.test(url);
                 });
         }, 10000);
  }

    this.clickDisastersLink = function() {
          browser.driver.findElement(By.partialLinkText("Disasters")).click();
          return browser.driver.wait(function() {
                  return browser.driver.getCurrentUrl().then(function(url) {
                         return /disasters/.test(url);
                   });
           }, 10000);
    }
};

module.exports = SmartResponseLoginPage;
