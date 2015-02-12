'use strict';

/**
 * @ngdoc function
 * @name angularApp.listeners
 * @description
 * # Authentification
 * Listener of the angularApp
 */
angular.module('angularApp')
    .config(function($httpProvider){
       $httpProvider.interceptors.push(function(serviceSecurityContext){
           return {
               request: function(config){
                   if(serviceSecurityContext.getToken()){
                       config.headers.Authorization = "Bearer " + serviceSecurityContext.getToken();
                   }
                   return config;
               }
           }
       })
    });
