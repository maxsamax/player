define([
    //libs
    "backbone",
    //deps
    "text!../tmpl/playlist.html"

], function(Backbone, playlistT){

    var View = Backbone.View.extend({
        el: "#container",
        events: {},
        initialize: function() {
            /*this.collection.on('reset', this.render);*/
            this.render();
        }, 
        template: _.template(playlistT),
        render: function(){
            this.model = this.collection.models || {number: "1", description: "ololo", duration: "3.52"}
            var content = this.template(this.model.toJSON);
            this.$el.append(content);
            return this;
        },
        model: []
    })

    return View;

});