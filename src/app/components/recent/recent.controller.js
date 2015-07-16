(function() {
    'use strict';

    angular
        .module('mangaRai')
        .controller('RecentController', RecentController);

    /** @ngInject */
    function RecentController (MangaRaiService) {
        var vm = this;

        vm.list = [];
        vm.covers = [];

        MangaRaiService.listCovers(10).then(function (covers) {
            vm.covers = covers;
        });
    }
})();
