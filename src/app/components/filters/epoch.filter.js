(function() {
  'use strict';

  angular
    .module('mangaRai')
    .filter('epoch', epoch);

    function epoch () {
        return function (input) {
            var epoch = input * 1000;
            var epochDate = new Date(epoch);
            var months = ["January", "February", "March", "April", "May", "June", "July", "August", "Sepetember", "October", "November", "December"];
            var monthIndex = epochDate.getMonth();
            var epochDay = epochDate.getDay();
            var day;

            if (epochDay === 0 || angular.isUndefined(epochDay)) {
                day = '';
            } else {
                day = epochDay + ', ';
            }

            var newOutput = months[monthIndex] + ' ' + day + epochDate.getFullYear();
            return newOutput;
        };
    }

})();
