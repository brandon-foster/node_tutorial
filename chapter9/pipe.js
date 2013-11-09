// require the file system module
var fs = require('fs');

// create a read stream and write stream
var stream = fs.createReadStream('data.json'),
	writable = fs.createWriteStream('copy.json');

// send all data to process.stdout (terminal screen)
stream.pipe(process.stdout);

// send all data to writable stream
stream.pipe(writable);