// pulling in mongoose direclty, not a live db connection
// just using model method of the mongoose module

var mongoose = require('mongoose');

// defining schema
// arguments: name of collection, object to define schema
// the object property names match up to field names
// the values determine the field types (should be JavaScript natives)
module.exports = mongoose.model('Flight', {
	number: Number,
	origin: String,
	destination: String,
	departs: String,
	arrives: String,
	actualDepart: Number,
	actualArrive: Number
});