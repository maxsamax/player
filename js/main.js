requirejs([
    "jquery",
    "backbone",
    "./collections/player",
    "./views/playbar"
], function($, Backbone, playerC, playbarV){
    var playerColl = new playerC;

    var playbarView = new playbarV({
    	collection: playerColl
    });

    $('#container').append(playbarView.render().el);

    player.fetch();
//    $(".btn-group").button();
//    $('#myModal').modal();
})