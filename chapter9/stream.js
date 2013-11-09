// core module for dealing with the file system
var fs = require('fs');

// create a stream out of data.json
// instead of reading the file at once, reads it one chunk at a time
var stream = fs.createReadStream('data.json');

// pause stream before any listeners can respond to an incoming chunk
stream.pause();

console.log('paused');

// wait one second to resume the stream
setTimeout(function() {
	console.log('resuming...');
	stream.resume();
}, 1000);

// listener to data event, accepting a chunk as an argument
stream.on('data', function (chunk) {
	console.log('----------------begin chunk----------------');
	console.log(chunk.toString()); // converts the chunk to a string
	console.log('----------------end chunk----------------');
});

// listener to data event, accepting a chunk as an argument
stream.on('data', function (chunk) {
	console.log('CHUNK LENGTH WAS: ' + chunk.length); // getting lenght of the chunk
});

// listener fires when end of file is reached
stream.on('end', function  () {
	console.log('----------------reached file end----------------');
});