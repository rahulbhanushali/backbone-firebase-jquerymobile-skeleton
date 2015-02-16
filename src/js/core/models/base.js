define(function (require) {
    'use strict';

    /**
     * Define the dependencies
     * @type {exports}
     */
    var FirebaseProvider = require('core/utils/firebaseProvider'),
        Backbone = require('backbone');

    /**
     * Define the model
     */
    var Base = Backbone.Model.extend({});

    Base.prototype.initialize = function () {
        this.firebaseReference = FirebaseProvider.getFirebaseObject();
    };

    return Base;
});