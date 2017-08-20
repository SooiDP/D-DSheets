import { AppPage } from './app.po';

describe('dn-dsite App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome title', () => {  
    page.navigateTo();
    expect(page.getWelcomeText()).toEqual('Welcome to D&D Sheets!');
  });

  it('should try to register', function() {
    browser.get('http://localhost:4200/home');

    element(by.css('authen')).click();
    element(by.css('register')).click();
    element(by.css('username')).sendKeys('test');
    element(by.css('email')).sendKeys('selenium@test.com');
    element(by.css('password')).sendKeys('test');

    element(by.css('logReg')).click();

    expect(element(by.binding('logout')).getText()).
        toEqual('logout');
  });
});
