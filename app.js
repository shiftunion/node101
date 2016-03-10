(function () {
    'use strict';
    var express = require('express');

    var app = express();


    app.use(express.static('public'));
    app.set('views', './src/views');

    app.set('view engine', 'ejs');


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
    bookRouter.route('/')
        .get(function (req, res) {
            res.render('books', {
                    nav: [{
                        Link: '/Books',
                        Text: 'Books'
                    },
                        {
                            Link: '/Authors',
                            Text: 'Authors'
                        }],
                    books: books
                });
        });

    bookRouter.route('/Single')
        .get(function (req, res) {
            res.send('hello Single nick\'s books');
        });


    app.use('/Books', bookRouter);

    app.get('/', function (req, res) {
        res.render('index', {
            nav: [{
                Link: '/Books',
                Text: 'Books'
            },
                {
                    Link: '/Authors',
                    Text: 'Authors'
                }]
        });
    });

    var port = process.env.PORT || 5000;

    app.listen(port, function (err) {
        console.log('Running server on port ' + port);
    });
}());