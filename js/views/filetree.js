define([
    //libs
    "backbone",
    //deps
    "text!../tmpl/filetree.html"

], function(Backbone, filetreeT){

    var View = Backbone.View.extend({
        el: $("#container"),
        events: {},
        template: _.template(filetreeT),
        render: function(){
            var content = this.template(this.model.toJSON);
            this.$el.append(content);
            return this;
        }
    })

    return View;

});