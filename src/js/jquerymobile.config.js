define(['jquery'], function ($) {

    'use strict';

    /**
     * Define the configuration for jquery mobile
     */
    $(document).on("mobileinit", function () {
        $.mobile.ajaxEnabled = false;
        $.mobile.hashListeningEnabled = false;
        $.mobile.pushStateEnabled = false;
        $.mobile.linkBindingEnabled = false;
    });
});