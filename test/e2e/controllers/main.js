'use strict';

describe('Controller: MainCtrl', function () {

  beforeEach(function() {
    browser().navigateTo('http://localhost/jkefexjs/app/');
  });


  it('should automatically redirect to /view1 when location hash/fragment is empty', function() {
    expect(browser().location().url()).toBe("http://localhost/jkefexjs/app/");
  });
  
});
