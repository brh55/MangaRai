(function() {
  'use strict';

  angular
    .module('mangaRai')
    .filter('tagClean', tagClean);

    function tagClean () {
        return function (input) {
            var newOutput = input.toString();
            return newOutput.replace(/,/g, ', ');
        };
    }

})();
