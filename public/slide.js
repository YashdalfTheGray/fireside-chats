/* global angular */

angular.module('firesideChats')
.controller('SlideCtrl',
    [
        '$rootScope', '$window', '$state',
        function($rootScope, $window, $state) {
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

            vm.external = function(link) {
                $window.open(link, '_blank');
            }
        }
    ]
);