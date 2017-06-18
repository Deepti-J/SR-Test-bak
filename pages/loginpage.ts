import { $, by, element, ElementFinder } from 'protractor';

export class LoginPageObject {
  public loginLink:ElementFinder;
  public userIdTextField:ElementFinder;
  public passwordTextField:ElementFinder;
  public logoutLink:ElementFinder;
  public homeLink: ElementFinder;
  public loginButton: ElementFinder;
  public disastersLink: ElementFinder;
  public organizationsLink:ElementFinder;

  

  constructor() {
    this.loginLink = element(by.partialLinkText("Login"));
    this.userIdTextField = element(by.id('email'));
    this.passwordTextField = element(by.id('password'));
    this.loginButton = element(by.id('login_button'));

    this.logoutLink = element(by.partialLinkText("Logout"));
    this.homeLink = element(by.linkText("/"));
    this.disastersLink = element(by.linkText("/dashboard/disasters"));
    this.organizationsLink = element(by.linkText("/dashboard/organizations"));
  }

  clearFieldValues = function() {
    this.userIdTextField.clear();
    this.passwordTextField.clear();
  }
}
