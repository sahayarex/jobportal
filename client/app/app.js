'use strict';

angular.module('jobportalApp', [
  'jobportalApp.auth',
  'jobportalApp.admin',
  'jobportalApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'smart-table',
  'ui.bootstrap',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
