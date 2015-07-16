(function() {
  'use strict';

    angular
        .module('mangaRai')
        .factory('MangaRaiService', MangaRaiService);

    function MangaRaiService(Restangular) {
        var service = Restangular.one('list', 0);

        return {
            listAllMangas: function () {
                return service.get().then(function(data) {
                    return data;
                });
            },
            /**
             * List covers of all the Mangas
             * @param  {Number} limit    [description]
             * @param  {Bool} buildUrl  Default: True. Builds required URLS
             * @return {Array}  Returns a list of image covers
             */
            listCovers: function (limit, buildUrl) {
                return service.get().then(function(data) {
                    var baseUrl = '';
                    var coverAllList = [];
                    var coverList = [];
                    var listCount = _.defaults(limit || data.manga.length);
                    var buildBool = _.defaults(buildUrl || true);

                    if (buildBool === true) {
                        baseUrl = 'http://cdn.mangaeden.com/mangasimg/';
                    } else {
                        baseUrl = '';
                    }

                    for (var i = 0; i < listCount; i++) {
                        coverAllList.push(data.manga[i].im);
                    }

                    // Clean up list
                    var cleanList = _.compact(coverAllList);

                    _.each(cleanList, function(url) {
                        var mangaUrl = baseUrl + url;
                        coverList.push(mangaUrl);
                    });

                    return coverList;
                });
            }


        };
    }
})();
