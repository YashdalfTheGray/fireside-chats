/* global angular */
/* global _ */

angular.module('firesideChats', 
    [
        'ui.router',
        'ngAnimate',
        'ngMaterial',
        'firebase'
    ]
)
.config([
        '$urlRouterProvider', '$stateProvider', '$mdThemingProvider',
        function($urlRouterProvider, $stateProvider, $mdThemingProvider) {
            "use strict";

            $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'home/home.tpl.html',
                controller: 'HomeCtrl as ctrl'
            })
            .state('security-slide0', {
                url: '/security/0',
                templateUrl: 'security/slide0.tpl.html',
                controller: 'SlideCtrl as ctrl'
            })
            .state('security-slide1', {
                url: '/security/1',
                templateUrl: 'security/slide1.tpl.html',
                controller: 'SlideCtrl as ctrl'
            })
            .state('security-slide2', {
                url: '/security/2',
                templateUrl: 'security/slide2.tpl.html',
                controller: 'SlideCtrl as ctrl'
            })
            .state('security-slide3', {
                url: '/security/3',
                templateUrl: 'security/slide3.tpl.html',
                controller: 'SlideCtrl as ctrl'
            })
            .state('security-slide4', {
                url: '/security/4',
                templateUrl: 'security/slide4.tpl.html',
                controller: 'SlideCtrl as ctrl'
            })
            .state('security-slide5', {
                url: '/security/5',
                templateUrl: 'security/slide5.tpl.html',
                controller: 'SlideCtrl as ctrl'
            })
            .state('security-slide6', {
                url: '/security/6',
                templateUrl: 'security/slide6.tpl.html',
                controller: 'SlideCtrl as ctrl'
            })
            .state('security-slide7', {
                url: '/security/7',
                templateUrl: 'security/slide7.tpl.html',
                controller: 'SlideCtrl as ctrl'
            })
            .state('security-slide8', {
                url: '/security/8',
                templateUrl: 'security/slide8.tpl.html',
                controller: 'SlideCtrl as ctrl'
            })
            .state('async-slide0', {
                url: '/async/0',
                templateUrl: 'async/slide0.tpl.html',
                controller: 'SlideCtrl as ctrl'
            })
            .state('async-slide1', {
                url: '/async/1',
                templateUrl: 'async/slide1.tpl.html',
                controller: 'SlideCtrl as ctrl'
            })
            .state('async-slide2', {
                url: '/async/2',
                templateUrl: 'async/slide2.tpl.html',
                controller: 'SlideCtrl as ctrl'
            })
            .state('async-slide3', {
                url: '/async/3',
                templateUrl: 'async/slide3.tpl.html',
                controller: 'SlideCtrl as ctrl'
            })
            .state('async-slide4', {
                url: '/async/4',
                templateUrl: 'async/slide4.tpl.html',
                controller: 'SlideCtrl as ctrl'
            })
            .state('async-slide5', {
                url: '/async/5',
                templateUrl: 'async/slide5.tpl.html',
                controller: 'SlideCtrl as ctrl'
            })
            .state('async-slide6', {
                url: '/async/6',
                templateUrl: 'async/slide6.tpl.html',
                controller: 'SlideCtrl as ctrl'
            })
            .state('async-slide7', {
                url: '/async/7',
                templateUrl: 'async/slide7.tpl.html',
                controller: 'SlideCtrl as ctrl'
            });
            $urlRouterProvider.otherwise('/');

            $mdThemingProvider.theme('default')
                .primaryPalette('blue')
                .accentPalette('orange',{
                    'default': 'A400',
                    'hue-1': 'A700'
                })
                .warnPalette('red');
        }
])
