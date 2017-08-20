describe('DnDSite register check', function() {
    it('should try to register', function() {
      browser.get('http://localhost:4200/home');

      element(by.model('authen')).click();
      element(by.model('register')).click();
      element(by.model('username')).sendKeys('test');
      element(by.model('email')).sendKeys('selenium@test.com');
      element(by.model('password')).sendKeys('test');
  
      element(by.model('logReg')).click();
  
      expect(element(by.binding('logout')).getText()).
          toEqual('logout');
    });
  });