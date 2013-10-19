var flight = require('./flight');

// define a flight's information by setting properties in an object literal
// that will eventually be passed into the flight module to give us back a
// flight
var pdxlax = {
	number: 847,
	origin: 'PDX',
	destination: 'LAX'
};

// create a flight
var pl = flight.create(pdxlax);

pl.triggerDepart();

console.log(pl.getInformation());

// defining another flight's informtion
var ausdca = {
	number: 382,
	origin: 'AUS',
	destination: 'DCA'
};

var ad = flight.create(ausdca);

console.log(ad.getInformation());

console.log(pl.getInformation());

// check the count and destinations
console.log(flight.getCount());
console.log(flight.getDestinations());