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
            .state('async-slide0', {
                url: '/async/0',
                templateUrl: 'async/slide0.tpl.html',
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
