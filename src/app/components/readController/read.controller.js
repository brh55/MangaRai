(function() {
    'use strict';

    angular
        .module('mangaRai')
        .controller('readController', readController);

    function readController (MangaRaiService, $stateParams) {
        var vm = this;

        vm.model = {
            chapterId: '',
            chapterNum: '',
            manga: {},
            mangaId: '',
            pages: [],
            selectChapter: '',
            title: $stateParams.title
        }


        vm.model.mangaId = $stateParams.mangaId;
        vm.model.chapterNum = $stateParams.chapterNum;
        vm.model.chapterId = $stateParams.chapterID;

        MangaRaiService.getPages(vm.model.chapterId).then(function (pages) {
            vm.model.pages = pages;
        });

        MangaRaiService.getManga(vm.model.mangaId).then(function (manga) {
            vm.model.manga = manga;
            console.log(vm.model.manga);
        });
    }
})();
