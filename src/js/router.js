define(function(require){

    'use strict';

    /**
     * Define all the required dependcies
     * @type {exports}
     */
    var Libraries = require('app-libraries'),
        HomePageView = require('app/views/home'),
        Session = require('core/models/session');

    /**
     * Define the application router
     */
    var AppRouter = Backbone.Router.extend({
        routes: {

            // Define some URL routes
            'home': 'showHomePage',

            // Default
            '*actions': 'defaultAction'
        },
        currentPage: null,
        //use changePage as a fallback mechanism if the view does not change automatically
        //call this function from the route listeners
        //make sure the view object that is being passed does not have any el specified
        changePage: function (page, changePageOptions) {

            if (this.currentPage) {
                this.currentPage.unbind();
                this.currentPage.remove();
                this.currentPage = null;
            }

            this.currentPage = page;

            //create a jquery.mobile page using the backbone view
            $(page.el).attr('data-role', 'page');

            //render the view and append it to the body
            page.render();
            $('body').append($(page.el));

            //options, transitions, effects to be used for jquery mobile
            changePageOptions = _.extend({
                    changeHash: false,
                    transition: 'slidefade'
                },
                changePageOptions
            );

            function updateDOM () {
                //trigger change page for jquery.mobile without changing the hash as it is already handled by backbone
                $.mobile.changePage($(page.el), changePageOptions);
            }

            //checking the state of the view
            //if the view is ready immediately update the DOM
            //else add the callback for updating the DOM
            if (page.isReady) {
                updateDOM();
            } else {
                //change the page when the view is ready
                page.addEventListener('ready', function (event) {
                    updateDOM();
                });
            }
        }
    });

    /**
     * Initialize the app router and define route listeners.
     */
    var initialize = function(){
        var app_router = new AppRouter;

        var session = new Session();

        app_router.on('route:defaultAction', function(actions){
                app_router.navigate('home', {trigger: true})
        });

        app_router.on('route:showHomePage', function(actions){
            //home page for the app
            app_router.changePage(new HomePageView());
        });

        //start the backbone history object
        Backbone.history.start();
    };

    return {
        initialize: initialize
    };
});