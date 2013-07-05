var Backbone = require('backbone');
var a = require('./a');
describe('module a', function() {
    it('should be an object', function() {
        expect(a).to.be.an('object');
    });
    it('should create a backbone view with a given element', function() {
        var el = document.createElement('div');
        var view = a.makeView(el);
        expect(view instanceof Backbone.View).to.equal(true);
    });
    it('should have other methods', function() {
        expect(a.test1()).to.equal(true);
        expect(a.test2()).to.equal(false);
    });
});