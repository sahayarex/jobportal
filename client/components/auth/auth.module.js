'use strict';

angular.module('jobportalApp.auth', [
  'jobportalApp.constants',
  'jobportalApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
