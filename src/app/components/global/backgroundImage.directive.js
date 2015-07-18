(function() {
  'use strict';

  angular
    .module('mangaRai')
    .directive('backgroundImage', backgroundImage);

  /** @ngInject */
  function backgroundImage() {
    var directive = {
      restrict: 'E',
      link: function (scope, element, attrs) {
        element.css({
            'background-image': 'url(' + attrs.backgroundImageDirective + ')',
            'background-repeat': 'no-repeat',
        });
      }
    };

    return directive;
  }

})();
