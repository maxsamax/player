requirejs.config({

    deps: ["main"],

    paths: {
        //libs
        "jquery": "./libs/jquery",
        "underscore": "./libs/underscore",
        "backbone": "./libs/backbone",
        //plugins
        "text": "./libs/text"
    },

    shim: {
        "backbone": {
            deps: ["jquery", "underscore"],
            exports: "Backbone"
        }
    }
});