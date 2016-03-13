'use strict';

angular.module('jobportalApp')
  .controller('AddjobCtrl', function ($scope,$state,$http) {
    $scope.message = 'Hello';
    $scope.company = {
      name:'jobs test',
      address:{},
      contact:{}
  };

  $scope.submit = function() {
    console.log("values", $scope.jobs);
    $http.post('/api/jobs', $scope.jobs).then(function(company) {
      console.log("jobs", jobs);
      if(company) {
        $state.go('jobs');
      }
    }, function(err) {
      console.log("err", err);
    });
  }
  });
