(function() {
    'use strict';

    angular
        .module('mangaRai')
        .controller('IndexController', IndexController);

    function IndexController ($state) {
        var vm = this;

        vm.model = {
            iconOn: '',
            sectionOn: ''
        };

        vm.model.iconOn = 'ion-ios-book-outline';
        vm.model.sectionOn = 'Mangas';

        vm.$state = $state;
    }

})();
