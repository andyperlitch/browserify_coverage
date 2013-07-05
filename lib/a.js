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