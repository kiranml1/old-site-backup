'use strict';

describe('Controller: MainCtrl', function () {

  beforeEach(function() {
    browser().navigateTo('/');
  });


  it('Sample Test', function() {
    expect(browser().location().hash()).toBe("");
  });
  
});
