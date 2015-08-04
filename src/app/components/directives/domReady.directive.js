(function() {
  'use strict';

  angular
    .module('mangaRai')
    .directive('domReady', domReady);

  /** @ngInject */
  function domReady() {
    var directive = {
        scope: true,
        link: function (scope, element) {
            if (scope.$last) {
                scope.$emit('dom:ready');
            }
        }
    };

    return directive;
  }

})();
