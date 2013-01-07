define([
    //libs
    "backbone",
    //deps
    "text!../tmpl/playlist.html"

], function(Backbone, playlistT){

    var View = Backbone.View.extend({
        el: $("#container"),
        events: {},
        template: _.template(playlistT),
        render: function(){
            var content = this.template(this.model.toJSON);
            this.$el.append(content);
            return this;
        }
    })

    return View;

});