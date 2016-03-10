(function () {
    'use strict';
    var express = require('express');

    var books = [
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
    ];

    var bookRouter = express.Router();

    var router = function (nav) {


        bookRouter.route('/')
            .get(function (req, res) {
                res.render('bookListView', {
                    nav: nav,
                    books: books
                });
            });

        bookRouter.route('/:id')
            .get(function (req, res) {
                var id = req.params.id;
                res.render('bookView', {
                    nav: nav,
                    book: books[id]
                });
            });

        return bookRouter;

    };

    module.exports = router;

}());