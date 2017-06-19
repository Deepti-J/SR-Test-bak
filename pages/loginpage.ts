import { $, by, element, ElementFinder } from 'protractor';

export class LoginPageObject {
  public loginLink:ElementFinder;
  public userIdTextField:ElementFinder;
  public passwordTextField:ElementFinder;
  public logoutLink:ElementFinder;
  public loginButton: ElementFinder;

  

  constructor() {
    this.loginLink = element(by.partialLinkText("Login"));
    this.userIdTextField = element(by.id('email'));
    this.passwordTextField = element(by.id('password'));
    this.loginButton = element(by.id('login_button'));

    this.logoutLink = element(by.partialLinkText("Logout"));
  }

  clearFieldValues = function() {
    this.userIdTextField.clear();
    this.passwordTextField.clear();
  }
}
