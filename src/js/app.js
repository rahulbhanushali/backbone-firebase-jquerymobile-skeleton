define(function (require) {

    'use strict';

    /**
     * Define required dependencies.
     */
    var Router = require('router');

    /**
     * Initialize the application
     */
    var initialize = function () {
        //Remove page from DOM when it's being replaced
        $('div[data-role="page"]').on('pagehide', function (event, ui) {
            $(event.currentTarget).remove();
        });

        // Pass in our Router module and call it's initialize function
        Router.initialize();
    };

    return {
        initialize: initialize
    };
});