(function() {
    'use strict';

    angular
        .module('mangaRai')
        .controller('mangaController', mangaController);
    /* global _ */
    /** @ngInject */
    function mangaController (MangaRaiService, $filter, $stateParams, $state) {
        var vm = this;

        vm.model = {
            mangaId: ''
        };

        vm.model.mangaId = $stateParams.id;

        // 5, # <-- chapter's number
        // 1275542373.0, # <-- chapter's date
        // "5", # <-- chapter's title
        // "4e711cb0c09225616d037cc2" # <-- chapter's ID (chapter.id in the next section)


        MangaRaiService.getManga(vm.model.mangaId).then(function(manga) {
            console.log(manga);
            vm.model = manga;
            if (manga.chapters.length === 0) {
                vm.model.chaptersCount = manga.chapters.length;
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
