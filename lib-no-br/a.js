// Creates a view for given element
var a = {
    
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