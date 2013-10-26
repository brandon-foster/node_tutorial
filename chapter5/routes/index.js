
/*
 * GET home page.
 */

var flights = require('../data');

var flight = require('../flight');

for(var number in flights) {
	flights[number] = flight(flights[number]);
}

exports.flight = function(req, res){
	var number = req.param('number');

	if (typeof flights[number] === 'undefined') {
		res.status(404).json({status: 'error'});
	} else {
		res.json(flights[number].getInformation());
	}
};

// sending PUT requests to certain flight numbers will
// mark them as arrived and respond with {status: 'done'}
exports.arrived = function(req, res) {
	var number = req.param('number');

	if (typeof flights[number] === 'undefined') {
		res.status(404).json({status: 'error'});
	} else {
		// triggerArrive() method
		flights[number].triggerArrive();
		// send a status
		res.json({status: 'done'});
	}
};

// render Jade generated HTML view and send variables (with values) to send to
// list.jade
exports.list = function(req, res) {
	
	// parameters: view to load, object with data to pass to view
	res.render('list', {
		title: 'All Flights',
		flights: flights });
};

// return all flights in JSON
exports.listJson = function(req, res) {
	
	var flightData = [];
	
	for (var number in flights) {
		flightData.push(flights[number].getInformation());
	}
	
	res.json(flightData);
};