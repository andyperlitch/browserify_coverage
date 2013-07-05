var b = require('./b');
describe('module b', function() {
    it('should be an object', function() {
        expect(b).to.be.an('object');
    });
});