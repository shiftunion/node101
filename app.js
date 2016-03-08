var express = require('express');

var app = express();

app.get("/", function(req,res){
    res.send("Hello books");
})

var port = 5000;
app.listen(port, function (err) {
    console.log('Running server on port ' + port);
});