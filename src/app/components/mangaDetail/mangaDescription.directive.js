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

            vm.model = {};

            MangaRaiService.getManga(vm.mangaId).then(function(manga) {
                vm.model = manga;
                var shortDesc = $filter('limitTo')(vm.model.description, 120);
                vm.model.limitDesc = shortDesc.concat(". . .");
            });
        }
      }

})();
