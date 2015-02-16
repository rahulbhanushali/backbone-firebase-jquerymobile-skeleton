requirejs.config({

    //By default load any module IDs from js/lib
    baseUrl: 'js',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        jquery: 'lib/jquery/jquery',
        'jquerymobile.config' : 'jquerymobile.config',
        jquerymobile: 'lib/jquery/jquery.mobile-1.4.5.min',
        underscore: 'lib/underscore/underscore',
        backbone: 'lib/backbone/backbone',
        firebase: 'lib/firebase/firebase',
        'backbonefire': 'lib/firebase/backbonefire',
		text:'lib/requirejs/plugins/text'
    },

    //Remember: only use shim config for non-AMD scripts,
    //scripts that do not already call define(). The shim
    //config will not work correctly if used on AMD scripts,
    //in particular, the exports and init config will not
    //be triggered, and the deps config will be confusing
    //for those cases.
    shim: {
        underscore: {
            exports: '_'
        },
        firebase: {
            exports: 'Firebase'
        },
        backbonefire: {
            deps: [
                'firebase',
                'backbone'
            ]
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        jquerymobile : {
            deps : ["jquery", 'jquerymobile.config']
        }
    }
});

// Load and initialize the app
require([
    'app'
], function(App){
    // The "app" dependency is passed in as "App"
    App.initialize();
});