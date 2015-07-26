(function() {
    'use strict';

    angular
        .module('mangaRai')
        .controller('readController', readController);

    function readController (MangaRaiService, $stateParams) {
        var vm = this;
        var m;

        vm.model = m = {
            chapterId: '',
            chapterNum: '',
            pages: [],
            title: ''
        }

        // set id based by state params
        m.chapterId = $stateParams.id;
        m.chapterNum = $stateParams.chapterNum;
        m.title = $stateParams.title;

        MangaRaiService.getPages(m.chapterId).then(function (pages) {
            m.pages = pages
            console.log(m.pages);
        });
    }
})();
