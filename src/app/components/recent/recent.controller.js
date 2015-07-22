(function() {
    'use strict';

    angular
        .module('mangaRai')
        .controller('RecentController', RecentController);

    /** @ngInject */
    function RecentController (MangaRaiService, $scope) {
        var vm = this;

        vm.model = {
            list: [],
            covers: [],
            mangas: []
        }


        vm.action = {
            setClear: function(index) {
                if (index % 3 === 0) {
                    return {
                        'clear': 'both'
                    };
                }
            },
            setFlex: function(index) {
                return {
                    'display': 'flex',
                    'flex-wrap': 'flex'
                };
            }
        }

        MangaRaiService.listAllMangas(12).then(function(manga) {
            var mangas = manga;

            vm.model.mangas = _.chunk(mangas, 3);
        });
    }

})();
