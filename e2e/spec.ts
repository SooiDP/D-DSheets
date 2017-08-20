// spec.js

describe('Protractor Demo App', function () {

    beforeEach(function () {
        browser.get('localhost:4200/home');
    });

    it('should display welcome title', () => {
        page.navigateTo();
        expect(page.getWelcomeText()).toEqual('Welcome to D&D Sheets!');
    });

    it('should try to register', function () {
        element(by.css('authen')).click();
        element(by.css('register')).click();
        element(by.css('username')).sendKeys('test');
        element(by.css('email')).sendKeys('selenium@test.com');
        element(by.css('password')).sendKeys('test');

        element(by.css('logReg')).click();

        expect(element(by.css('logout')).getText())
            .toEqual('logout');
    });

    it('should try to login', function () {
        element(by.css('.authen')).click();
        element(by.css('.register')).click();
        element(by.css('.username')).sendKeys('test');
        element(by.css('.email')).sendKeys('selenium@test.com');
        element(by.css('.password')).sendKeys('test');

        element(by.css('.logReg')).click();

        expect(element(by.css('logout')).getText())
            .toEqual('logout');
    });
});   