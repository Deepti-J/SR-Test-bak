import { $, by, element, ElementFinder } from 'protractor';

export class LoginPageObject {
  public loginLink:ElementFinder;
  public userIdTextField:ElementFinder;
  public passwordTextField:ElementFinder;
  public loginButton: ElementFinder;

  

  constructor() {
    this.loginLink = element(by.partialLinkText("Login"));
    this.userIdTextField = element(by.id('email'));
    this.loginButton = element(by.id('login_button'));
    this.passwordTextField = element(by.id('password'));
  }


getInvalidCredentialsMessage = function() {
  return element(by.partialLinkText("Incorrect login information"));
}

  clearFieldValues = function() {
    this.userIdTextField.clear();
    this.passwordTextField.clear();
  }
}
