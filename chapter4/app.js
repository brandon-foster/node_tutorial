var flight = require('./flight');

// define a flight's information by setting properties in an object literal
// that will eventually be passed into the flight module to give us back a
// flight
var pdxlax = {
	number: 847,
	origin: 'PDX',
	destination: 'LAX'
};

// pl contains the functions that the flight module returns
// i.e., we have a flight!
var pl = flight(pdxlax);

pl.triggerDepart();

console.log(pl.getInformation());

// defining another flight's informtion
var ausdca = {
	number: 382,
	origin: 'AUS',
	destination: 'DCA'
};

var ad = flight(ausdca);

console.log(ad.getInformation());

console.log(pl.getInformation());