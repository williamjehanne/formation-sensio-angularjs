'use strict';

describe('Controller: CreerCtrl', function () {

  // load the controller's module
  beforeEach(module('angularApp'));

  var CreerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CreerCtrl = $controller('CreerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
