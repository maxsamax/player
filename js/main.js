requirejs([
    "jquery",
    "backbone",
    "./collections/player",
    "./views/playbar",
    "./views/playlist",
    "./views/filetree"
], function($, Backbone, playerC, playbarV, playlistV, filetreeV){
    var playerColl = new playerC;
    playerColl.fetch();
    
    var playbarView = new playbarV({
    	collection: playerColl
    });

//    $('#container').append(playbarView.render().el);

    
//    $(".btn-group").button();
//    $('#myModal').modal();
})