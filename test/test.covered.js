require=(function(e,t,n){function i(n,s){if(!t[n]){if(!e[n]){var o=typeof require=="function"&&require;if(!s&&o)return o(n,!0);if(r)return r(n,!0);throw new Error("Cannot find module '"+n+"'")}var u=t[n]={exports:{}};e[n][0].call(u.exports,function(t){var r=e[n][1][t];return i(r?r:t)},u,u.exports)}return t[n].exports}var r=typeof require=="function"&&require;for(var s=0;s<n.length;s++)i(n[s]);return i})({"./lib/a":[function(require,module,exports){
module.exports=require('hDWlvW');
},{}],"hDWlvW":[function(require,module,exports){
// Creates a view for given element

var Backbone = require('backbone');
exports = module.exports = {
    
    makeView: function(el) {
        return new Backbone.View({
            el: el
        });
    },
    
    test1: function() {
        return true;
    },
    
    test2: function() {
        return false;
    }
    
};
},{"backbone":"1ztuUG"}]},{},[])
;