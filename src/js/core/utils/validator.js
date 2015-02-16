define(function (require) {

    'use strict';

    /**
     * Define the validator module
     * @constructor
     */
    var Validator = function () {
    };

    /**
     * Validates whether an string is an valid email address
     * @param {string} email The email to be verified
     * @returns {boolean} Whether the email address is valid or not
     */
    Validator.prototype.isValidEmail = function (email) {
        return !(this.isEmpty(email)) &&
            (/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(email);
    };

    return Validator;
});