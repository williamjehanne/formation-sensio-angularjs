'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:CreerCtrl
 * @description
 * # CreerCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
  .controller('CreerCtrl', function ($scope, Posts) {
    $scope.ajout = function(){
        Posts.save({}, $scope.post, function(){
            $scope.msgResult = "Mis à jour";
        }, function(){
            $scope.msgResult = "Erreur";
        });
    }
  });
