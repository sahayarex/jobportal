'use strict';

describe('Controller: AddcompanyCtrl', function () {

  // load the controller's module
  beforeEach(module('jobportalApp'));

  var AddcompanyCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddcompanyCtrl = $controller('AddcompanyCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
