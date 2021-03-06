'use strict';

class SignupController {
  //start-non-standard
  user = {};
  errors = {};
  submitted = false;
  //end-non-standard

  constructor(Auth, $state) {
    this.Auth = Auth;
    this.$state = $state;
    this.user = {
      email: "testuser@gmail.com",
      city: "testcity",
      rpassword: "secret",
      cpassword: "secret",
      username: "testuser",
      fname: "test",
      lname: "user",
      country: "United States",
      postal: "654343",
      wphone: "7484393833",
      hphone: "8774288283",
      etc: "test"
    }
  }

  register(form) {
    this.submitted = true;

    if (form.$valid) {
      this.Auth.createUser({
        name: this.user.name,
        email: this.user.email,
        password: this.user.password
      })
      .then(() => {
        // Account created, redirect to home
        this.$state.go('main');
      })
      .catch(err => {
        err = err.data;
        this.errors = {};

        // Update validity of form fields that match the mongoose errors
        angular.forEach(err.errors, (error, field) => {
          form[field].$setValidity('mongoose', false);
          this.errors[field] = error.message;
        });
      });
    }
  }
}

angular.module('jobportalApp')
  .controller('SignupController', SignupController);
