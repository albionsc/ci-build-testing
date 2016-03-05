var express = require('express');
var app = express();

//Serving static files
app.use('/lib',  express.static(__dirname + '/lib'));
app.use('/client',  express.static(__dirname + '/client'));

app.get('/', function (req, res) {
    res.status(200).sendFile(__dirname + '/client/index.html');
});

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

app.listen(server_port, server_ip_address, function(){
    console.log("Listening on " + server_ip_address + ", server_port " + server_port)
});