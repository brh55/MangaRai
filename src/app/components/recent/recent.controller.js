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
        };

        MangaRaiService.listAllMangas("1").then(function(manga) {
            var mangas = manga;

            vm.model.mangas = _.chunk(mangas, 20);
        });
    }

})();
