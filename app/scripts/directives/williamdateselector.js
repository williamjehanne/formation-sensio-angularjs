'use strict';

/**
 * @ngdoc directive
 * @name angularApp.directive:williamDateSelector
 * @description
 * # williamDateSelector
 */
angular.module('angularApp')
  .directive('williamDateSelector', function () {
    return {
      templateUrl: 'views/williamdateselector.html',
      restrict: 'E',
      scope: {
          temps: '=date'
      },
      link: function(scope, element, attrs) {
          scope.$watch(function(){
              return getDateString();
          }, function(){
              // quand heure a changé
              scope.temps = getDateString();
          });

          function getDateString(){
              return scope.heure + ' ' + scope.minute + ' ' + scope.seconde;
          }
      }
    };
  });
