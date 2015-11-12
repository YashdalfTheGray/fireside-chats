/* global angular */

angular.module('firesideChats')
.controller('SlideNavCtrl',
    [
        '$rootScope', '$timeout', '$state',
        function($rootScope, $timeout, $state) {
            "use strict";

            var vm = this;

            vm.maxSlides = $rootScope.maxSlides - 1;

            function getNextState(currentState, direction) {
                var stateLength = currentState.length;
                var slideNum = parseInt(currentState[stateLength - 1]);

                if (direction === 'up') {
                    slideNum++;
                }
                else if (direction === 'down') {
                    slideNum--;
                }
                
                return currentState.substring(0, stateLength - 1) + slideNum.toString();
            };

            vm.next = function() {
                vm.openActions = false;
                $state.go(getNextState($state.current.name, 'up'));
            };

            vm.back = function() {
                vm.openActions = false;
                $state.go(getNextState($state.current.name, 'down'));
            };

            vm.home = function() {
                vm.openActions = false;
                $state.go('home');
            };

            vm.getSlideNum = function() {
                return parseInt($state.current.name[$state.current.name.length - 1]);
            };

            vm.isHome = function() {
                return $state.is('home');
            }

            vm.shouldHide = function() {
                return $rootScope.stateTransition;
            }

            $rootScope.$on('$stateChangeStart', function() {
                $rootScope.stateTransition = true;
            });

            $rootScope.$on('$stateChangeSuccess', function() {
                $timeout(function() {
                    $rootScope.stateTransition = false;
                }, 600);
                vm.maxSlides = $rootScope.maxSlides - 1;
            });
        }
    ]
);