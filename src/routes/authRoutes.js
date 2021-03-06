(function () {
    'use strict';
    var express = require('express');

    var authRouter = express.Router();

    var mongodb = require('mongodb').MongoClient;


    var router = function () {

        authRouter.route('/signUp')
            .post(function (req, res) {

                var url = 'mongodb://localhost:27017/libraryApp';

                mongodb.connect(url, function (err, db) {
                    var collection = db.collection('users');
                    var user = {
                        username: req.body.userName,
                        password: req.body.password
                    };


                    collection.insert(user, function (err, results) {

                        req.login(results.ops[0], function () {
                            res.redirect('/auth/profile');
                        });

                        db.close();
                    });
                });


            })


            .get(function (req, res) {
                var url = 'mongodb://localhost:27017/libraryApp';

                mongodb.connect(url, function (err, db) {
                    var collection = db.collection('books');
                    collection.insertMany(books, function (err, results) {
                        res.send(results);
                        db.close();
                    });
                });

            });

        authRouter.route('/profile')
            .get(function (req, res) {
                res.json(req.user);
            });

        return authRouter;
    };

    module.exports = router;

}());