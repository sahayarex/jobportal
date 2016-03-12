'use strict';

angular.module('jobportalApp')
  .controller('AddcompanyCtrl', function ($scope, $state, $http) {
    $scope.message = 'Hello';
    $scope.company = {
      name:'company test',
      address:{},
      contact:{}
    };

    $scope.submit = function() {
      console.log("values", $scope.company);
      $http.post('/api/companies', $scope.company).then(function(company) {
        console.log("company", company);
        if(company) {
          $state.go('companies');
        }
      }, function(err) {
        console.log("err", err);
      });
    }
  });
