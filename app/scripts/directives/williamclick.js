'use strict';

/**
 * @ngdoc directive
 * @name angularApp.directive:williamClick
 * @description
 * # williamClick
 */
angular.module('angularApp')
  .directive('williamClick', function () {
    return {
      template: '',
      restrict: 'A',
      link: function(scope, element, attrs) {
        $(element).click(function(){
            scope[attrs.williamClick]();
        })
      }
    };
  });
