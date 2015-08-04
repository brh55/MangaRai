(function() {
    'use strict';

    angular
        .module('mangaRai')
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/views/main.html',
                controller: 'recentController',
                controllerAs: 'recent'
            })
            .state('detail', {
                url: '/manga/:id',
                templateUrl: 'app/views/details.html',
                controller: 'mangaController',
                controllerAs: 'manga'
            })
            .state('read', {
                url: '/manga/:mangaId/:title/:chapterID/chapter/:chapterNum',
                views: {
                    "reading@": {
                        templateUrl: 'app/views/read.html',
                        controller: 'readController',
                        controllerAs: 'read'
                }
            }
        });

        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/');
    }

})();
