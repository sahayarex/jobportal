'use strict';

angular.module('jobportalApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('jobs', {
        url: '/jobs',
        templateUrl: 'app/jobs/jobs.html',
        controller: 'JobsCtrl'
      });
  });