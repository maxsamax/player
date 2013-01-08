requirejs([
    "jquery",
    "backbone",
    "./collections/player",
    "./views/playbar",
    "./views/playlist",
    "./views/filetree"
], function($, Backbone, playerC, playbarV, playlistV, filetreeV){
    var playerColl = new playerC;
    
    
    var playbarView = new playbarV({
    	collection: playerColl
    });
    var playlistView = new playlistV({
    	collection: playerColl
    });
	
//    $('#container').append(playbarView.render().el);

    playerColl.fetch();
//    $(".btn-group").button();
//    $('#myModal').modal();
})