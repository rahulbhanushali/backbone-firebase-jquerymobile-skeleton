define(function (require) {

    'use strict';

    /**
     * Define the required dependencies
     * @type {exports}
     */
    var Libraries = require('app-libraries'),
        Validator = require('core/utils/validator');

    /**
     * Define the base view
     */
    var Base = Backbone.View.extend({
        className: "base-view",
        tagName: "div"
    });

    /**
     * Initializes the view and places a blocker on the screen till the view is ready
     * @param options
     */
    Base.prototype.initialize = function (options) {
        this.initValidators();
        this.block({
            text: 'Loading...',
            textVisible: true
        });

        this.isReady = false;
    };

    /**
     * Initializes the validator
     */
    Base.prototype.initValidators = function () {
        this.validator = new Validator();
    };

    /**
     * Renders the view
     * Provide implementation for this method to render your child views
     */
    Base.prototype.render = function () {
        throw new Error('Render function not defined');
    };

    /**
     * Blocks the UI and adds css classes to disable the page controls displaying the page blocker
     * @param {object} options Additional jquery mobile options to be used for blocking the view
     */
    Base.prototype.block = function (options) {

        //define the options to be used for blocking the view
        options = _.extend({
                theme: 'b'
            },
            options
        );

        this.$el.addClass('ui-disabled');
        $.mobile.loading('show', options);
    };

    /**
     * Unblocks the view and removes the css classes that were attached for blocking the page and hides the page blocker
     */
    Base.prototype.unblock = function () {
        this.$el.removeClass('ui-disabled');
        $.mobile.loading('hide');
    };

    /**
     * Registers an event listener with the callback {func}
     * @param {String} type - type of the event
     * @param {function} func - The callback function to handle the event, this function SHOULD expect its first parameter to be of type {Event}
     * @param {object} context - The context from which to apply {func}, if you omit this parameter, it defaults to {this}
     */
    Base.prototype.addEventListener = function (type, func, context) {

        if (context === undefined) {
            this.on(type, func, this);
        } else {
            this.on(type, func, context);
        }

    };

    /**
     * Remove an event listener for the callback {func}
     * @see Base.addEventListener
     */
    Base.prototype.removeEventListener = function (type, func, context) {
        this.off(type, func, context);
    };

    /**
     * Dispatches the event {event}
     * @param {Event|String} event - When {event} is an {Event}, this proceeds normally and dispatches the {event}
     *                               object. When {event} is a {String}, this creates an {Event} with {Event.type}
     *                               equal to {event}. The created {Event} can't have any attributes set into it,
     *                               so it's not recommended that you do this unless you just need a fast event
     *                               dispatched.
     */
    Base.prototype.dispatchEvent = function (event) {
        if (!(event instanceof Event)) {
            if (typeof event === "string") {
                event = new Event(event);
            }
        }

        this.trigger(event.type, event);
    };

    /**
     * Indicates the view is rendered and ready
     */
    Base.prototype.ready = function () {
        this.unblock();

        //maintain the state of the view
        this.isReady = true;

        var readyEvent = new CustomEvent('ready');
        this.dispatchEvent(readyEvent);
    };

    return Base;
});