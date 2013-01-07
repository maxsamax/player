requirejs([
    "jquery",
    "backbone",
    "./collections/player"
], function($){
    var player = new Collection;

    player.fetch();
})