// (function() {
//   'use strict';

//   describe('controllers', function(){
//     var MangaRaiService,
//         httpBackend;
//     var listUrl = 'https://www.mangaeden.com/api/list/0';

//     beforeEach(module('mangaRai'));

//     beforeEach(inject(function (_MangaRaiService_, $httpBackend) {
//         MangaRaiService = _MangaRaiService_;
//         httpBackend = $httpBackend;

//         var mockData = {
//           "a": "12-nin-no-yasashii-koroshiya---leo-murder-case",
//           "c": [
//             "Drama",
//             "Psicologico",
//             "Sentimentale",
//             "Shoujo"
//           ],
//           "h": 9141,
//           "i": "536b738645b9efe8ec285b47",
//           "im": "4f/4f3aeb145cff3ecf65b1d3f7d22151fddbeeb46cebb6695ce383cadd.jpg",
//           "ld": 1420678343.0,
//           "s": 2,
//           "t": "12 Nin no Yasashii Koroshiya - Leo Murder Case"
//         };

//         httpBackend.whenGET(listUrl).respond(JSON.stringify(mockData));
//     }));

//         it('should list all Mangas', function () {
//             console.log(httpBackend.whenGET);
//             httpBackend.expectGET(listUrl);
//             var testResolve;
//             MangaRaiService.listAllMangas().then(function(data){
//                 testResolve = data;
//             });
//             console.log(testResolve);
//         });

//         afterEach(function() {
//             $httpBackend.verifyNoOutstandingExpectation();
//             $httpBackend.verifyNoOutstandingRequest();
//         });

//   });
// })();
