'use strict';

describe('Controller: ConnexionCtrl', function () {

  // load the controller's module
  beforeEach(module('angularApp'));

  var ConnexionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ConnexionCtrl = $controller('ConnexionCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
