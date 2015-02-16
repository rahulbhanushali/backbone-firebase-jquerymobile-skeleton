define(function (require) {

    'use strict';

    /**
     * Define the required dependencies
     * @type {exports}
     */
    var BaseView = require('core/views/base'),
        Template = require('text!./templates/home.html');

    /**
     * Define the view
     */
    var View = BaseView.extend({
    });

    /**
     * Renders the view
     * @returns {View}
     */
    View.prototype.render = function () {
        this.$el.html(Template);
        this.ready();
        return this;
    };

    return View;
});