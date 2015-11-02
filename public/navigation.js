/* global angular */

angular.module('firesideChats')
.controller('ToolbarCtrl',
    [
        '$rootScope', '$state', '$mdSidenav',
        function($rootScope, $state, $mdSidenav) {
            "use strict";

            var vm = this;

            vm.isHome = function() {
                return $state.is('home');
            };

            vm.showNav = function() {
                $mdSidenav('chats').toggle();
            };

            $rootScope.$on('titleChangedEvent', function(event, newTitle) {
                vm.title = newTitle;
            });
            vm.title = "Fireside Chats";
        }
    ]
)
.controller('SidebarCtrl',
    [
        '$rootScope', '$state', '$mdSidenav',
        function($rootScope, $state, $mdSidenav) {
            "use strict";

            var vm = this;

            vm.goTo = function goToState(chat) {
                $rootScope.$emit('titleChangedEvent', chat.name);
                $rootScope.maxSlides = chat.maxSlides;
                $state.go(chat.state);
                $mdSidenav('chats').close();
            };

            vm.chats = [
                { name: 'Security and Encryption', state: 'security-slide0', maxSlides: 10 },
                { name: 'Async execution and Promises', state: 'async-slide0', maxSlides: 10 }
            ];
        }
    ]
);