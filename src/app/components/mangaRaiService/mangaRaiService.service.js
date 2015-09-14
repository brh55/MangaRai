(function() {
  'use strict';

  /* global _ */
    angular
        .module('mangaRai')
        .factory('MangaRaiService', MangaRaiService);

    function MangaRaiService(Restangular) {
        var listService = Restangular.all('list');
        var mangaService = Restangular.all('manga');
        var chapterService = Restangular.all('chapter');

        return {
            /**
             * List all the mangas specified by the parameter
             * @param  {Number} limit limits the return built from
             * @return {Array}       list of Manga Objects             */
            listAllMangas: function (page, limit) {
                return listService.get(0, {p: page}).then(function(data) {
                    var listCount = _.defaults(limit || data.manga.length);
                    var mangaData = [];

                    for (var i = 0; i < listCount; i++) {
                        mangaData.push(data.manga[i]);
                    }

                    return mangaData;
                });
            },
            /**
             * Get specific Manga based on ID
             * @param  {String} mangaId Manga ID to retrieve
             * @return {Object}         Relevant Manga object
             */
            getManga: function (mangaId) {
                return mangaService.get(mangaId).then(function(manga) {
                    var buildUrl = "http://www.mangaeden.com/img/";
                    var language;

                    if (manga.language === 0) {
                        language = "English";
                    } else {
                        language = "Italian";
                    }

                    var mangaObject = {
                        aka: manga.aka,
                        alias: manga.alias,
                        artist: manga.artist,
                        author: manga.author,
                        categories: manga.categories,
                        chapterCount: manga.chapter_len,
                        chapters: manga.chapters,
                        coverUrl: manga.imageURL,
                        description: manga.description.toString(),
                        hits: manga.hits,
                        language: language,
                        lastChapterDate: manga.last_chapter_date,
                        mangaId: mangaId,
                        image: buildUrl + manga.image,
                        releasedYear: manga.year,
                        startsWith: manga.startsWith,
                        status: manga.status,
                        title: manga.title,
                        url: manga.url,
                        year: manga.released
                    };

                    console.log(manga);

                    return mangaObject;
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
            },

            getPages: function (id) {
                return chapterService.get(id).then(function(data) {
                    console.log(data);
                    var chapterLength = data.images.length;
                    var pages = [];
                    for (var i = 0; i < chapterLength; i++) {
                        var pageNum = data.images[i][0] + 1;
                        var page = {
                            num: parseInt(pageNum),
                            imgUrl: data.images[i][1],
                            width: data.images[i][2],
                            height: data.images[i][3]
                        };

                        pages.push(page);
                    }

                    return pages;
                });
            }
        };
    }
})();
