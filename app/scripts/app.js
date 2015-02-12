'use strict';

/**
 * @ngdoc overview
 * @name angularApp
 * @description
 * # angularApp
 *
 * Main module of the application.
 */
angular
    .module('angularApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ui.router',
        'ngSanitize',
        'ngTouch'
    ])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('layout', {
                abstract: true,
                views: {
                    "": {
                        templateUrl: 'views/layout.html'
                    },
                    "header@layout": {
                        templateUrl: 'views/header.html',
                        controller: 'HeaderCtrl'
                    }
                }
            })
            .state('home', {
                parent: 'layout',
                url: "/",
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .state('about', {
                parent: 'layout',
                url: "/about",
                views: {
                    "": {
                        templateUrl: 'views/about.html',
                        controller: 'AboutCtrl'
                    },
                    foo: {
                        template: '<p>Hello world !</p>'
                    }
                }
            })
            .state('tuto', {
                parent: 'layout',
                url: "/tuto",
                templateUrl: 'views/tuto.html',
                controller: 'TutoCtrl'
            })
            .state('contact', {
                parent: 'layout',
                url: "/contact",
                templateUrl: 'views/tuto.html'
            })
            .state('post',{
                parent: 'layout',
                url: "/post/{id:int}",
                templateUrl: 'views/post.html',
                controller: 'PostCtrl'
            })
            .state('creer',{
                parent: 'layout',
                url: "/creer",
                templateUrl: 'views/creer.html',
                controller: 'CreerCtrl'
            })
            .state('connexion', {
                parent: 'layout',
                url: "/connexion",
                templateUrl: 'views/connexion.html',
                controller: 'ConnexionCtrl'
            })
            .state('client', {
                parent: 'layout',
                url: "/client",
                templateUrl: 'views/client.html',
                controller: 'ClientCtrl'
            })
        $urlRouterProvider.otherwise('/');
    });
