(function () {
    'use strict';
    var express = require('express');

    var app = express();


    app.use(express.static('public'));
    app.set('views', './src/views');

    app.set('view engine', 'ejs');

    var nav = [
        {
            Link: '/Books',
            Text: 'Books'
        },
        {
            Link: '/Authors',
            Text: 'Authors'
        }
    ];

    var bookRouter = require('./src/routes/bookRoutes')(nav);
    var adminRouter = require('./src/routes/adminRoutes')(nav);


    app.use('/Books', bookRouter);
    app.use('/Admin', adminRouter);


    app.get('/', function (req, res) {
        res.render('index', {
            nav: nav
        });
    });

    var port = process.env.PORT || 5000;

    app.listen(port, function (err) {
        console.log('Running server on port ' + port);
    });
}());