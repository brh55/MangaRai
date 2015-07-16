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

        MangaRaiService.getManga('5492fbbe45b9ef55c2a4f8bb').then(function (manga) {
            console.log(manga);
        });
    }

})();
