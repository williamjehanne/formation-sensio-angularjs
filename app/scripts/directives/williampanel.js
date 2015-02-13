'use strict';

/**
 * @ngdoc directive
 * @name angularApp.directive:williamPanel
 * @description
 * # williamPanel
 */
angular.module('angularApp')
    .directive('williamPanel', function(){
        return {
            transclude: true,
            templateUrl: 'views/williampanel.html',
            scope: {
                title: '@' // title : '@title'
            }
        }
    });