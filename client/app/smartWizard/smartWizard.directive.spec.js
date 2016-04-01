'use strict';

describe('Directive: smartWizard', function () {

  // load the directive's module
  beforeEach(module('jobportalApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<smart-wizard></smart-wizard>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the smartWizard directive');
  }));
});
