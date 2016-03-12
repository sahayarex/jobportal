'use strict';

angular.module('jobportalApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('addcompany', {
        url: '/addcompany',
        templateUrl: 'app/addcompany/addcompany.html',
        controller: 'AddcompanyCtrl'
      });
  });