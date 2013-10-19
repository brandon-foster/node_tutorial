
/*
 * GET home page.
 */

// require data
var flights = require('../data');

// require flight module
var flight = require('../flight');

// process data in data/index.js and turn properties into objects
for (var number in flights) {
  // set each flight property to an object created by the flight module
  flights[number] = flight.create(flights[number])
}


// define function for looking up data and returning it
exports.flight = function(req, res) {
  
  var number = req.param('number');
  
  if (typeof flights[number] === 'undefined') {
	res.status(404).json({status: 'error'});
  } else {
	res.json(flights[number].getInformation());
  }
};