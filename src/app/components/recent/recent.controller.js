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
                    console.log('returning shit');
                    return {
                        'clear': 'both'
                    };
                }
            }
        }

        MangaRaiService.listAllMangas(12).then(function(manga) {
            vm.model.mangas = manga;
        });

    }

})();
