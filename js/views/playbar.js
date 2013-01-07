define([
    //libs
    "backbone",
    //deps
    "text!../tmpl/playbar.html"
], function(Backbone, playbarTemplate){

    var Playbar = Backbone.View.extend({
        el: $("#container"),
        events: {},
        template: _.template(playbarTemplate),
        render: function(){
            var content = this.template(this.model.toJSON);
            this.$el.html(content);
            return this;
        }
    })

    return Playbar;

});