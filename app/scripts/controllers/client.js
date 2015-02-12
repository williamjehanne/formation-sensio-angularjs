'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:ClientCtrl
 * @description
 * # ClientCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
  .controller('ClientCtrl', function ($scope, $http) {
    $http.get("http://localhost/neobe-api-v2/web/app_dev.php/clients").then(function(httpResponse){
        $scope.clients = httpResponse.data;
    });
  });

