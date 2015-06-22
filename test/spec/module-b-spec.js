module.exports = (function () {
    'use strict';
    
    var moduleB = require('modules/module-b');

    // beforeEach(function() {
    //     example = new Example();
    // });

    describe('Module B', function() {
        it('should have a method named "add"', function() {
            expect(moduleB.add).to.be.a('function');
        });

        describe('add()', function() {
            it('should return the sum of two numbers', function() {
                expect(moduleB.add(1, 1)).to.equal(2);
            });
        });
    });
})();