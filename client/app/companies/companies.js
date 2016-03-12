'use strict';

angular.module('jobportalApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('companies', {
        url: '/companies',
        templateUrl: 'app/companies/companies.html',
        controller: 'CompaniesCtrl'
      });
  });