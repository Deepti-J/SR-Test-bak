import { $, by, element, ElementFinder } from 'protractor';

export class SidebarMenuPageObject {
  public homeLink: ElementFinder;
  public disastersLink: ElementFinder;
  public organizationsLink:ElementFinder;
  public servicesLink: ElementFinder;
  public countriesLink:ElementFinder;
  public configureListsLink:ElementFinder;
  public messagesLink:ElementFinder;
  public usersLink:ElementFinder;
  public changePasswordLink:ElementFinder;
  public logoutLink:ElementFinder;




  constructor() {
    this.homeLink = element(by.linkText("/"));
    this.disastersLink = element(by.linkText("/dashboard/disasters"));
    this.organizationsLink = element(by.linkText("/dashboard/organizations"));
    this.servicesLink = element(by.linkText("/dashboard/services"));
    this.countriesLink = element(by.linkText("/dashboard/countries"));
    this.configureListsLink = element(by.linkText("/dashboard/configure-lists"));
    this.messagesLink = element(by.linkText("/dashboard/messages"));
    this.usersLink = element(by.linkText("/dashboard/users"));
    this.changePasswordLink = element(by.linkText("/dashboard/change-password")); 
    this.logoutLink = element(by.partialLinkText("Logout"));
               
  }
}
