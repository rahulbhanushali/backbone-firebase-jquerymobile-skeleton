define(function (require) {

    'use strict';

    /**
     * Define the dependencies
     * @type {exports}
     */
    var BaseModel = require('core/models/base');

    /**
     * Define the session model
     * This model uses firebase reference object to authenticate user
     */
    var Session = BaseModel.extend({});

    /**
     * Define email property for the model
     */
    Object.defineProperty(Session, 'email',
        {
            get: function () {
                return this.get('email');
            },
            set: function (value) {
                this.set('email', value);
            }
        }
    );

    /**
     * Define password property for the model
     */
    Object.defineProperty(Session, 'password',
        {
            get: function () {
                return this.get('password');
            },
            set: function (value) {
                this.set('password', value);
            }
        }
    );

    /**
     * Create a new firebase user with the defined credentials
     * @param {function} callback The callback function to be called once the user has been created
     */
    Session.prototype.register = function (callback) {

        var info = {
            isValid: false
        };

        this.firebaseReference.createUser(
            this.toJSON(),
            function (error) {
                if (error) {
                    info['error'] = error.message;
                } else {
                    info['isValid'] = true;
                }

                if (callback) {
                    callback(info);
                }
            }
        );
    };

    /**
     * Authenticate the user
     * @param {function} callback The callback function to be called when the authentication process is complete
     */
    Session.prototype.authenticate = function (callback) {

        var authInfo = {
            isValid: false
        };

        this.firebaseReference.authWithPassword(
            this.toJSON(),
            function (error, authData) {
                if (error) {
                    authInfo['error'] = error.message;
                } else {

                    var user = authData.uid;
                    // userId is not properly formatted as required
                    var userId = user.split(':');
                    // add it to current session
                    sessionStorage.setItem('uid',userId[1]);
                    authInfo['isValid'] = true;
                }

                if (callback) {
                    callback(authInfo);
                }
            }
        );
    };

    /**
     * Log the user out of the application
     * @param callback
     */
    Session.prototype.logout = function (callback) {

        this.firebaseReference.unauth();

        if (callback) {
            callback(authInfo);
        }
    };

    /**
     * Get the authentication status of the current user
     * @returns {*}
     */
    Session.prototype.getAuth = function () {
        return this.firebaseReference.getAuth();
    };

    /**
     * Reset the password for the user
     */
    Session.prototype.resetPassword = function () {
        var ref = this.firebaseReference;
        ref.resetPassword({
            email: this.attributes.email
        }, function(error) {
            if (error) {
                switch (error.code) {
                    case "INVALID_USER":
                        console.log("The specified user account does not exist.");
                        break;
                    default:
                        console.log("Error resetting password:", error);
                }
            } else {
                console.log("Password reset email sent successfully!");
            }
        });
    };

    return Session;
});