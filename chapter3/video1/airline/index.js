// require http and express modules
var http = require('http'),
	express = require('express');

// use the express module
var app = express();

// handle requests to root by outputting 'Airline'
app.get('/', function(req, res) {
	res.end('Airline');
});

http.createServer(app).listen(3000);