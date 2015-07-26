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
            aka: [],
            artist: '',
            author: '',
            chapterCount: '',
            chapters: [],
            description: '',
            hits: '',
            mangaId: '',
            startsWith: '',
            status: '',
            title: '',
            url: '',
            year: ''
        };

        m.mangaId = $stateParams.id;

        // 5, # <-- chapter's number
        // 1275542373.0, # <-- chapter's date
        // "5", # <-- chapter's title
        // "4e711cb0c09225616d037cc2" # <-- chapter's ID (chapter.id in the next section)


        MangaRaiService.getManga(vm.model.mangaId).then(function(manga) {
            m.aka = manga.aka;
            m.artist = manga.artist;
            m.author = manga.author;
            m.chapters = manga.chapters;
            m.description = manga.description.toString();
            m.hits = manga.hits;
            m.startsWith = manga.startsWith;
            m.status = manga.status;
            m.title = manga.title;
            m.url = manga.url;
            m.year = manga.released;
            console.log(manga);

            if (manga.chapters.length === 0) {
                m.chaptersCount = manga.chapters.length;
                var d = new Date(manga.chapters[0][1]);

                var month = d.getMonth();
                var day = d.getDate();
                var year = d.getFullYear()

                var months = ["January", "February", "March", "April", "May", "June", "July", "August", "Sepetember", "October", "November", "December"];

                var dateBuild = months[month] + ", " + day + " " + year;

                m.chapterDate = dateBuild;
            }


        });
    }

})();
