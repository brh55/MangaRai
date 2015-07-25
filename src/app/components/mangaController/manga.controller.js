(function() {
    'use strict';

    angular
        .module('mangaRai')
        .controller('mangaController', mangaController);
    /* global _ */
    /** @ngInject */
    function mangaController (MangaRaiService, $filter, $stateParams, $state) {
        var vm = this;
        var m;

        vm.model = m = {
            description: '',
            url: '',
            startsWith: '',
            year: '',
            author: '',
            artist: '',
            hits: '',
            status: '',
            mangaId: '',
            title: '',
            aka: [],
        };

        m.mangaId = $stateParams.id;

        // 5, # <-- chapter's number 
        // 1275542373.0, # <-- chapter's date 
        // "5", # <-- chapter's title 
        // "4e711cb0c09225616d037cc2" # <-- chapter's ID (chapter.id in the next section) 


        MangaRaiService.getManga(vm.model.mangaId).then(function(manga) {
            m.url = manga.url;
            m.description = manga.description.toString();
            m.startsWith = manga.startsWith;
            m.year = manga.released;
            m.author = manga.author;
            m.artist = manga.artist;
            m.hits = manga.hits;
            m.status = manga.status;
            m.aka = manga.aka;
            m.chaptersNumber = manga.chapters[0][0];
            m.chapterDate = new Date(manga.chapters[0][1]);
            m.chapterTitle = manga.chapters[0][2];
            m.chapterId = manga.chapters[0][3];

            // var chaptersNum = manga.chapters_len;
            // for (var i; i > chaptersNum; i++) {
            //     MangaRaiService.getChapters()
            // }
        });

        // TODO: Find a better alternative;
        // If the author is undefined redirect
    }

})();
