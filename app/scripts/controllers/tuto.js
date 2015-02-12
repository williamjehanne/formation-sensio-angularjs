'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:TutoCtrl
 * @description
 * # TutoCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
  .controller('TutoCtrl', function ($scope, $http, Posts) {

    /*$http.get('http://jsonplaceholder.typicode.com/posts')
        .then(function(httpResponse){
            $scope.mesPosts = httpResponse.data;
        }, function(httpResponse){

        });*/

    $scope.mesPosts = Posts.query();

  });
