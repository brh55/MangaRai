(function() {
  'use strict';

  angular
    .module('mangaRai')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
