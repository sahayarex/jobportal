'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'Home',
    'state': 'main'
  }];

  isCollapsed = true;
  //end-non-standard

  constructor(Auth) {
    this.isLoggedIn = Auth.isLoggedIn;
    console.log("logged in", this.isLoggedIn);
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
  }
}

angular.module('jobportalApp')
  .controller('NavbarController', NavbarController);
