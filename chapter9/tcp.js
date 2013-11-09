// require net and file system modules (core module that comes with node)
var net = require('net'),
  fs = require('fs');

// controls how the server works
var server = net.createServer(function  (connect) {

  // create a writable stream
  var log = fs.createWriteStream('eli.log');

  console.log('Connection established');

  // listener for end of connection
  connect.on('end', function() {
    console.log('Connection ended');
  });

  // write to the duplex stream
  connect.write("Welcome to our airline customer hotline.\r\n");
  connect.write("We call it ELI: the Electronic Listening Interface.\r\n");
  connect.write("We'll repeat back your message and log it for further review.\r\n");

  // read everything from the connection and pipe it back to the same
  // connection as well as to the log
  connect.pipe(connect).pipe(log);

});

// start the server
// arguments: port number, callback function when server starts
server.listen(7777, function() {
  console.log('Server ready on port 7777');
});