'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:ConnexionCtrl
 * @description
 * # ConnexionCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
  .controller('ConnexionCtrl', function ($scope, $http, serviceSecurityContext) {
    $scope.seconnecter = function(){

        $http.post("http://localhost/neobe-api-v2/web/app_dev.php/login_check", $scope.user)
            .then(function(httpResponse){
                serviceSecurityContext.setToken(httpResponse.data.token);
                $scope.msg = httpResponse.data.token;
            }, function(httpResponse){
                $scope.msg = "error";
            });
    }
  });
