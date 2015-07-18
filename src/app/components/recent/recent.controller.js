(function() {
    'use strict';

    angular
        .module('mangaRai')
        .controller('RecentController', RecentController);

    /** @ngInject */
    function RecentController (MangaRaiService, $scope) {
        var vm = this;

        vm.list = [];
        vm.covers = [];
        vm.mangas = [];

        MangaRaiService.listAllMangas(10).then(function(manga) {
            vm.mangas = manga;
            console.log(manga);
        });

    }

})();
