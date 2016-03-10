var express = require('express');
var path = require('path');
var app = express();

//Serving static files
app.use('/',  express.static(path.resolve(__dirname + '/../client')));
app.use('/lib',  express.static(path.resolve(__dirname + '/../client/lib')));

app.get('/', function (req, res) {
    res.status(200).sendFile(path.resolve(__dirname + '/../client/index.html'));
});

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 3000
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

app.listen(server_port, server_ip_address, function(){
    console.log("Listening on " + server_ip_address + ", server_port " + server_port)
});