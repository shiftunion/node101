(function () {
    'use strict';

    var passport = require('passport');
    var localStrategy = require('passport-local');

    module.exports = function () {
        passport.use(new localStrategy({
                usernameField: 'userName',
                passwordField: 'password'
            },
            function (username, password, done) {
                var user = {
                    username: username,
                    password: password
                };
                done(null, user);
            }));
    };

}());
