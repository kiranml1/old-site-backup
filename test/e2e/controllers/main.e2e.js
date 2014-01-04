'use strict';

describe('Controller: MainCtrl', function () {

  beforeEach(function() {
    browser().navigateTo('/');
  });


  it('Sample Test', function() {
    expect(element('nav ul li').count()).toEqual(0);
  });
  
});
