(function () {
    'use strict';
    var express = require('express');

    var app = express();

    app.use(express.static('public'));
    app.use(express.static('src/views'));


    app.get("/", function (req, res) {
        res.send("Hello books");
    });


    var port = process.env.PORT || 5000;

    app.listen(port, function (err) {
        console.log('Running server on port ' + port);
    });
}());