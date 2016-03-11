(function () {
    'use strict';

    var express = require('express');
    var bodyParser = require('body-parser');

    var cookieParser = require('cookie-parser');

    var passport = require('passport');

    var session = require('express-session');

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
    var authRouter = require('./src/routes/authRoutes')(nav);

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded());
    app.use(cookieParser());
    app.use(session({'secret':'library'}));
    app.use(passport.initialize());
    app.use(passport.session());



    app.use('/Books', bookRouter);
    app.use('/Admin', adminRouter);
    app.use('/Auth', authRouter);





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