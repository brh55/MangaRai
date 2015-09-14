(function() {
    'use strict';

    angular
        .module('mangaRai')
        .controller('readController', readController);

    function readController (MangaRaiService, $stateParams, $scope, $state) {
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

        vm.action = {
            getPages: function () {
                console.log('hi');
                vm.model.pages = [];

                    console.log(vm.model.manga.chapterNum);
                 MangaRaiService.getPages(vm.model.manga.chapters[vm.model.chapterNum][3]).then(function (pages) {
                    vm.model.pages = pages;
                });
            }
        }

        vm.model.chapterNum = parseInt($stateParams.chapterNum);
        vm.model.chapterId = $stateParams.chapterID;
        vm.model.mangaId = $stateParams.mangaId;

        MangaRaiService.getPages(vm.model.chapterId).then(function (pages) {
            vm.model.pages = pages;
            console.log(vm.model.pages);
        });

        MangaRaiService.getManga(vm.model.mangaId).then(function (manga) {
            vm.model.manga = manga;
        });

        $scope.$watch("vm.model.chapterNum", function(oldVal, newVal) {
            if (newVal !== oldVal) {
               vm.action.getPages();
            }
        });
    }
})();
