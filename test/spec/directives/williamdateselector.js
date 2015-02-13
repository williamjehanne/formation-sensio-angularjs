'use strict';

describe('Directive: williamDateSelector', function () {

  // load the directive's module
  beforeEach(module('angularApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<william-date-selector></william-date-selector>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the williamDateSelector directive');
  }));
});
