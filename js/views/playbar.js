define([
    //libs
    "backbone",
    //deps
    "text!../tmpl/playbar.html"
], function(Backbone, playbarT){

    var View = Backbone.View.extend({
        el: "#container",
        events: {},
        initialize: function() {
            this.render();
        },
        template: _.template(playbarT),
        render: function(){
            var content = this.template(/*this.model.toJSON*/);
            this.$el.append(content);
            return this;
        }
    })

    return View;

});