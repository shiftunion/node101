(function () {
    'use strict';
    var express = require('express');

    var app = express();

    app.use(express.static('public'));
    app.set('views', './src/views');

    app.set('view engine', 'ejs');

    app.get('/', function (req, res) {
        res.render('index', {
            title: 'hello from nick on his bike',
            list: ['a', 'b']
        });
    });

    var port = process.env.PORT || 5000;

    app.listen(port, function (err) {
        console.log('Running server on port ' + port);
    });
}());