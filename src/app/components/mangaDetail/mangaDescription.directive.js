(function() {
    'use strict';

    angular
        .module('mangaRai')
        .directive('mangaDescription', mangaDescription);

    /** @ngInject */
    function mangaDescription (MangaRaiService) {
        var directive = {
            restrict: 'A',
            scope: {
                mangaId: '=mangaDescription'
            },
            transclude: true,
            templateUrl: 'app/components/mangaDetail/partials/mangaDetails.html',
            controller: mangaDescriptionController,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        function mangaDescriptionController ($filter) {
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
                limitDesc: ''
            };

            MangaRaiService.getManga(vm.mangaId).then(function(manga) {
                m.description = manga.description.toString();
                m.url = manga.url;
                m.startsWith = manga.startsWith;
                m.year = manga.released;
                m.author = manga.author;
                m.artist = manga.artist;
                m.hits = manga.hits;
                m.status = manga.status;

                var shortDesc = $filter('limitTo')(m.description, 120);
                m.limitDesc = shortDesc.concat("...");
            });
        }
      }

})();
