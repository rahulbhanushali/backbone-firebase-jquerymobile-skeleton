define(function (require) {

    'use strict';

    /**
     * Define the required dependency
     */
    var Firebase = require('firebase');

    //the firebase to be used
    //Update your firebase url here
    var firebaseUrl = "<YOUR_FIREBASE_URL_HERE>";

    var firebaseObject = new Firebase(firebaseUrl);

    /**
     * Get the firebase url
     * @returns {string}
     */
    function getFirebaseUrl() {
        return firebaseUrl;
    }

    /**
     * Get the firebase reference object
     * @returns {Firebase}
     */
    function getFirebaseObject() {
        return firebaseObject;
    }

    return {
        getFirebaseObject: getFirebaseObject,
        getFirebaseUrl: getFirebaseUrl
    };
});