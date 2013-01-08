requirejs([
//    "jquery",
    "backbone",
    "./collections/player"
], function($, Backbone, playerC){
    var player = new playerC;

    player.fetch();
//    $(".btn-group").button();
//    $('#myModal').modal();
})