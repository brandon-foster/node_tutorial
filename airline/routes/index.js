
/*
 * GET home page.
 */

// require flight module
var flight = require('../flight');

var flight1 = flight.create({
  number: 1,
  origin: 'LAX',
  destination: 'DCA',
  departs: '9AM',
  arrives: '4PM'
});

var flight2 = flight.create({
  number: 2,
  origin: 'LAX',
  destination: 'PDX',
  departs: '10AM',
  arrives: '2PM'
});

exports.flight1 = function(req, res) {
  res.json(flight1.getInformation());
};

exports.flight2 = function(req, res) {
  res.json(flight2.getInformation());
};