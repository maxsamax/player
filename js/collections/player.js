define([
    //libs
    "backbone",
    //deps
    "../models/player"
], function(Backbone, playerM, playbarV, playlistV, filetreeV){

    var Collection = Backbone.Collection.extend({
        model: playerM,
        url: "/player/json.json"
    });

    return Collection;
})

