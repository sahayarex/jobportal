'use strict';

class LoginController {
  constructor(Auth, $state) {
    this.user = {email:'admin@example.com', password:'admin'};
    this.errors = {};
    this.submitted = false;

    this.Auth = Auth;
    this.$state = $state;
  }

  login(form) {
    this.submitted = true;

    if (form.$valid) {
      this.Auth.login({
        email: this.user.email,
        password: this.user.password
      })
      .then(() => {
        // Logged in, redirect to home
        this.$state.go('companies');
      })
      .catch(err => {
        this.errors.other = err.message;
      });
    }
  }
}

angular.module('jobportalApp')
  .controller('LoginController', LoginController);
