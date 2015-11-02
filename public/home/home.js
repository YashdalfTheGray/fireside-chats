/* global angular */

angular.module('firesideChats')
.controller('HomeCtrl',
    [
        '$rootScope',
        function($rootScope) {
            "use strict";

            var vm = this;

            $rootScope.$emit('titleChangedEvent', 'Fireside Chats');
        }
    ]
);