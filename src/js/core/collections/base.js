define(function (require) {
    'use strict';

    /**
     * Define the dependencies
     * @type {exports}
     */
    var Libraries = require('app-libraries'),
        FirebaseProvider = require('core/utils/firebaseProvider');

    /**
     * Define the firebase collection
     * @type {*|void}
     */
    var Base = Backbone.Firebase.Collection.extend({
        initialize: function () {
            this.firebaseProvider = FirebaseProvider;
            this.firebaseReference = FirebaseProvider.getFirebaseObject();
        },
        url: function () {
            throw new Error("Firebase Collection URL not defined!");
        }
    });

    return Base;
});