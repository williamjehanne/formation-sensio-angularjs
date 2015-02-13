'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
  .controller('MainCtrl', function ($scope) {
    $scope.foo = function(){
        alert("hello");
    }
    $scope.bar = function(){
        alert("hello world");
    }


  });
