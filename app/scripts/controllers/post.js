'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:PostCtrl
 * @description
 * # PostCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
  .controller('PostCtrl', function ($scope, $stateParams, $http, $resource) {
    /*
     $http.get('http://jsonplaceholder.typicode.com/posts/'+$stateParams.id)
         .then(function(httpResponse){
             $scope.post = httpResponse.data;
         }, function(httpResponse){

         });*/

        $scope.isLoading = true;

        var Post = $resource('http://jsonplaceholder.typicode.com/posts/:id');
        $scope.post = Post.get($stateParams, function(){
            $scope.isLoading = false;
        });

        //$scope.post.$save()
        //$scope.post.$delete()


  });
