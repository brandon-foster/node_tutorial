// keep serving requests, regardless of how many requests come in

var http = require('http'); // require http module

// gets executed whenever a request comes in
// receives request 'req' and reqponse 'res' objects
var handleRequest = function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'}); // writing http header
	res.end('Welcome to Node Essential Training\n'); // writing some content
};

var server = http.createServer(handleRequest); // creating a server, passing in hanldeRequest function

// node starts the server, and keeps listening
// keeps listening for requests until server is stopped
server.listen(3000, 'localhost'); // takes port number, address