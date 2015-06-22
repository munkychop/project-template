module.exports = (function () {
    'use strict';
    
    var moduleA = require('modules/module-a');

    // beforeEach(function() {
    //     example = new Example();
    // });

    describe('Module A', function() {
        it('should have a property named "exampleProp1" of type string', function() {
            expect(moduleA.exampleProp1).to.be.a('string');
        });

        it('should have a property named "exampleProp2" of type number', function() {
            expect(moduleA.exampleProp2).to.be.a('number');
        });

        describe('exampleProp1', function() {
            it('should be "hello!"', function() {
                expect(moduleA.exampleProp1).to.equal('hello!');
            });
        });
    });
})();