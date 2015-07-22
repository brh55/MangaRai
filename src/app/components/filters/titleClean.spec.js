(function() {
  'use strict';

    describe('Filter: titleClean', function() {
        var titleClean;
        var $filter;

        beforeEach(module('mangaRai'));

        beforeEach(inject(function(_$filter_) {
            $filter = _$filter_;
        }));

        it('should strip out hypens', function() {
            expect($filter('titleClean')("Manga-Title-To-Test")).toBe("Manga Title To Test");
            expect($filter('titleClean')("Another-Title-Featured")).toBe("Another Title Featured");
        });
    });
})();
