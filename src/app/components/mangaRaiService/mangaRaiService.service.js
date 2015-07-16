(function() {
  'use strict';

    angular
        .module('mangaRai')
        .factory('MangaRaiService', MangaRaiService);

    function MangaRaiService(Restangular) {
        var listService = Restangular.one('list', 0);
        var mangaService = Restangular.all('manga');

        return {
            /** Fetches all of Mangas and returns the JSON */
            listAllMangas: function () {
                return listService.get().then(function(data) {
                    return data;
                });
            },
            /**
             * Get specific Manga based on ID
             * @param  {String} mangaId Manga ID to retrieve
             * @return {Object}         Relevant Manga object
             */
            getManga: function (mangaId) {
                return mangaService.get(mangaId).then(function(data) {
                    return data;
                });
            },
            /**
             * List covers of all the Mangas
             * @param  {Integer} limit  Specify limit of how many covers to display
             * @param  {Bool} buildUrl  Default: True. Builds required URLS
             * @return {Array}  Returns a list of image covers
             */
            listCovers: function (limit, buildUrl) {
                return listService.get().then(function(data) {
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
