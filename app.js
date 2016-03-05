var express = require('express');
var app = express();

//Serving static files
app.use('/lib',  express.static(__dirname + '/lib'));
app.use('/client',  express.static(__dirname + '/client'));

app.get('/', function (req, res) {
    res.status(200).sendFile(__dirname + '/client/index.html');
});

app.listen(3000, function () {
    console.log('App listening on port 3000');
});