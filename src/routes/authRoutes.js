(function () {
    'use strict';
    var express = require('express');

    var authRouter = express.Router();

    var mongodb = require('mongodb').MongoClient;


    var router = function () {

        authRouter.route('/signUp')
            .post(function (req, res) {
                console.log('nick' + req.body);
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


        return authRouter;
    };

    module.exports = router;

}());