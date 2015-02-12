'use strict';

describe('Controller: TutoCtrl', function () {

  // load the controller's module
  beforeEach(module('angularApp'));

  var TutoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TutoCtrl = $controller('TutoCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
