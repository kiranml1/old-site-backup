'use strict';

describe('Controller: MainCtrl', function () {

  beforeEach(function() {
    browser().navigateTo('http://127.0.0.1:9000');
  });


  it('Sample Test', function() {
    expect(browser().location().url()).toBe("http://127.0.0.1:9000");
  });
  
});
