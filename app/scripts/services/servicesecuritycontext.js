'use strict';

/**
 * @ngdoc service
 * @name angularApp.serviceSecurityContext
 * @description
 * # serviceSecurityContext
 * Service in the angularApp.
 */
angular.module('angularApp')
  .service('serviceSecurityContext', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
        this.token = "";
        this.setToken = function(token){
            this.token = token;
        };
        this.getToken = function(){
            return this.token;
        }
  });
