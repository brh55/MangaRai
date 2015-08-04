(function() {
    'use strict';

    angular
        .module('mangaRai')
        .controller('recentController', recentController);
    /* global _ */
    /** @ngInject */
    function recentController (MangaRaiService) {
        var vm = this;

        vm.model = {
            list: [],
            covers: [],
            mangas: [],
            mangaList: [],
            tags: ''
        };


        vm.action = {
            setClear: function (index) {
                if (index % 4 === 0) {
                    return {
                        'clear': 'both'
                    };
                }
            },
            setFlex: function (index) {
                return {
                    'display': 'flex',
                    'flex-wrap': 'flex'
                };
            },
            loadManga: function () {
                if (!angular.isUndefined(vm.model.mangas)) {
                    var previousLoaded = vm.model.mangaList.length;
                    vm.model.mangaList.push(vm.model.mangas[previousLoaded + 1]);
                }
            }
        };

        MangaRaiService.listAllMangas("0").then(function(manga) {
            var mangas = manga;
            vm.model.mangas = _.chunk(mangas, 3);
            vm.model.mangaList.push(vm.model.mangas[0]);
        });
    }

})();
