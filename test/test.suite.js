;(function(e,t,n){function i(n,s){if(!t[n]){if(!e[n]){var o=typeof require=="function"&&require;if(!s&&o)return o(n,!0);if(r)return r(n,!0);throw new Error("Cannot find module '"+n+"'")}var u=t[n]={exports:{}};e[n][0].call(u.exports,function(t){var r=e[n][1][t];return i(r?r:t)},u,u.exports)}return t[n].exports}var r=typeof require=="function"&&require;for(var s=0;s<n.length;s++)i(n[s]);return i})({1:[function(require,module,exports){
require('../lib/a.spec');
// require('../lib/b.spec');
},{"../lib/a.spec":2}],2:[function(require,module,exports){
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
},{"./a":"hDWlvW","backbone":"1ztuUG"}]},{},[1])
;