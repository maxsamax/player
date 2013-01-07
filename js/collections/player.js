define([
    //libs
    "backbone",
    //deps
    "../models/player",
    "../views/playbar",
    "../views/playlist",
    "../views/filetree"
], function(Backbone, playerM, playbarV, playlistV, filetreeV){

    var Collection = Backbone.Collection.extend({
        model: playerM,
        url: "/json.json"
    });

    return Collection;
})

