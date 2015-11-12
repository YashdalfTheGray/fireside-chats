/* global angular */

angular.module('firesideChats')
.controller('SlideCtrl',
    [
        '$window',
        function($window) {
            "use strict";

            var vm = this;

            vm.external = function(link) {
                $window.open(link, '_blank');
            }
        }
    ]
);