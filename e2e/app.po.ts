import { browser, by, element } from 'protractor';

export class Auth0Ng2TutPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
