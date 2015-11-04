/* global angular */

angular.module('firesideChats')
.controller('SlideCtrl',
    [
        '$rootScope', '$state',
        function($rootScope, $state) {
            "use strict";

            var vm = this;

            vm.next = function() {
                var slideNum = $state.current.name[$state.current.name.length - 1];
                vm.openActions = false;
                console.log('Navigating to next!');
                console.log(slideNum);
            };

            vm.back = function() {
                var slideNum = $state.current.name[$state.current.name.length - 1];
                vm.openActions = false;
                console.log('Navigating to previous!');
            };

            vm.home = function() {
                vm.openActions = false;
                $state.go('home');
            }
        }
    ]
);