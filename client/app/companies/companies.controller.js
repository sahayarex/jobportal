'use strict';

angular.module('jobportalApp')
  .controller('CompaniesCtrl', function ($scope, $http, $filter) {
    // $scope.rowCollection = [
    //     {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com', strictSearchValue: "abc", strictSelectValue: "ab"},
    //     {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com', strictSearchValue: "ab", strictSelectValue: "abc"},
    //     {firstName: 'Francoise', lastName: 'Frere', birthDate: new Date('1955-08-27'), balance: 42343, email: 'raymondef@gmail.com', strictSearchValue: "abc", strictSelectValue: "abc"}
    // ];
    //
    // $scope.displayCollection = [].concat($scope.rowCollection);

    $scope.itemsByPage = 10;
    // $scope.rowCollection = [{
    //   _id: "56e57f442dc9d71702e69d76",
    //   address_address: "14/83, Vazhavilai",
    //   address_city: "marthandam",
    //   address_state: "Tamilnadu",
    //   contact_email: "antojodickson@gmail.com",
    //   contact_fname: "anto",
    //   contact_lname: "jo",
    //   contact_phone: "897339930",
    //   contact_title: "manager",
    //   fax: "8573739",
    //   name: "company test",
    //   owner: "anto",
    //   phone1: "897",
    //   phone2: "949",
    //   socialmedia: "facebook",
    //   website: "google.com"
    // }];
    $http.get('/api/companies').then(response => {
      console.log("response", response.data);
      $scope.rowCollection = response.data;
      $scope.displayCollection = [].concat($scope.rowCollection);
    });
  })
  .filter('myStrictFilter', function($filter){
    return function(input, predicate){
        return $filter('filter')(input, predicate, true);
    }
}).filter('unique', function() {
    return function (arr, field) {
        var o = {}, i, l = arr.length, r = [];
        for(i=0; i<l;i+=1) {
            o[arr[i][field]] = arr[i];
        }
        for(i in o) {
            r.push(o[i]);
        }
        return r;
    };
  });
