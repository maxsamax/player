define([
    //libs
    "backbone",
    //deps
    "text!../tmpl/playbar.html"
], function(Backbone, playbarT){

    var Playbar = Backbone.View.extend({
        el: $("#container"),
        events: {},
        template: _.template(playbarT),
        render: function(){
            var content = this.template(this.model.toJSON);
            this.$el.append(content);
            return this;
        }
    })

    return Playbar;

});