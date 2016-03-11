'use strict';

(function() {

class MainController {

  constructor($http, Auth, $state) {
    // this.$http = $http;
    // this.awesomeThings = [];
    // $http.get('/api/things').then(response => {
    //   this.awesomeThings = response.data;
    // });
    this.isLoggedIn = Auth.isLoggedIn();
    this.user = {email:'admin@example.com', password:'admin'};
    this.errors = {};
    this.submitted = false;

    this.Auth = Auth;
    this.$state = $state;


  }

  // addThing() {
  //   if (this.newThing) {
  //     this.$http.post('/api/things', { name: this.newThing });
  //     this.newThing = '';
  //   }
  // }
  //
  // deleteThing(thing) {
  //   this.$http.delete('/api/things/' + thing._id);
  // }

  login(form) {
    this.submitted = true;
    console.log("form", form);
    if (form.$valid) {
      this.Auth.login({
        email: this.user.email,
        password: this.user.password
      })
      .then(() => {
        // Logged in, redirect to home
        this.$state.go('settings');
      })
      .catch(err => {
        this.errors.other = err.message;
      });
    }
  }
}

angular.module('jobportalApp')
  .controller('MainController', MainController);

})();
