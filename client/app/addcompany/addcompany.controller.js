'use strict';

angular.module('jobportalApp')
  .controller('AddcompanyCtrl', function ($scope) {
    $scope.message = 'Hello';
    $scope.company = {
      name:'company test',
      address:{},
      contact:{}
    };

    $scope.submit = function() {
      console.log("values", $scope.company);
    }
  });
