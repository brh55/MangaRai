(function() {
  'use strict';

  angular
    .module('mangaRai')
    .filter('titleClean', titleClean);

    function titleClean () {
        return function (input) {
            return input.replace(/-/g, ' ');
        };
    }

})();
