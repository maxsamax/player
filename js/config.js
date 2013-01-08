requirejs.config({

    deps: ["main"],

    paths: {
        //libs
        "jquery": "./libs/jquery",
        "underscore": "./libs/underscore",
        "backbone": "./libs/backbone",
        "bootstrap": "./libs/bootstrap",
        //plugins
        "text": "./libs/text"
    },

    shim: {
        "backbone": {
            deps: ["jquery", "underscore", "bootstrap"],
            exports: "Backbone"
        }/*,
        "jquery": {
            deps: ["bootstrap"],
            exports: "$"
        }*/
    }
});