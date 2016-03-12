'use strict';

angular.module('jobportalApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('addjob', {
        url: '/addjob',
        templateUrl: 'app/addjob/addjob.html',
        controller: 'AddjobCtrl'
      });
  });