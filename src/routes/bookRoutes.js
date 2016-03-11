(function () {
    'use strict';
    var express = require('express');

    /*var books = [
     {
     "title": "Dude, where is my Json",
     "genre": "Java",
     "read": "true",
     "author": "Herbert Schildt"
     },
     {
     "title": "Magic, shit you dont need right now",
     "genre": "C++",
     "read": "false",
     "author": "E.Balagurusamy"
     },
     {
     "title": "Cats, when did you eat one last",
     "genre": "C#",
     "read": "true",
     "author": "John Burner"
     },
     {
     "title": "Mike, the brother you did not want",
     "genre": "JavaScript",
     "read": "false",
     "author": "Nick Cahill"
     },
     {
     "title": "Amazing things you didn't know united",
     "genre": "Java",
     "read": "false",
     "author": "Cat a Moran"
     },
     ];*/

    var bookRouter = express.Router();
    var mongodb = require('mongodb').MongoClient;
    var objectId = require('mongodb').ObjectID;

    var router = function (nav) {


        bookRouter.route('/')
            .get(function (req, res) {
                var url = 'mongodb://localhost:27017/libraryApp';

                mongodb.connect(url, function (err, db) {
                    var collection = db.collection('books');
                    collection.find({}).toArray(function (err, results) {
                        res.render('bookListView', {
                            nav: nav,
                            books: results
                        });
                        db.close();
                    });
                });
            });

        bookRouter.route('/:id')
            .get(function (req, res) {
                var url = 'mongodb://localhost:27017/libraryApp';
                var id = new objectId(req.params.id);
                mongodb.connect(url, function (err, db) {
                    var collection = db.collection('books');
                    collection.findOne({_id: id}, function (err, results) {
                        res.render('bookView', {
                            nav: nav,
                            book: results
                        });
                        db.close();
                    });
                });
            });


        return bookRouter;

    };

    module.exports = router;

}());