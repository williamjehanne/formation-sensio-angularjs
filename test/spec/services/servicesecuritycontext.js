'use strict';

describe('Service: serviceSecurityContext', function () {

  // load the service's module
  beforeEach(module('angularApp'));

  // instantiate service
  var serviceSecurityContext;
  beforeEach(inject(function (_serviceSecurityContext_) {
    serviceSecurityContext = _serviceSecurityContext_;
  }));

  it('should do something', function () {
    expect(!!serviceSecurityContext).toBe(true);
  });

});
