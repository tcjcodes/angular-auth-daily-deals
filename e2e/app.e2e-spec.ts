import { Auth0Ng2TutPage } from './app.po';

describe('auth0-ng2-tut App', () => {
  let page: Auth0Ng2TutPage;

  beforeEach(() => {
    page = new Auth0Ng2TutPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
