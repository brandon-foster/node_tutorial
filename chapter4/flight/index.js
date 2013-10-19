var number, origin, destination;

// export functions so it can be used elsewhere
// setters
exports.setNumber = function(num) {
	number = num;
}

exports.setOrigin = function(o) {
	origin = o;
}

exports.setDestination = function(d) {
	destination = d;
}

// getter
exports.getInfo = function() {
	return {
		number: number,
		origin: origin,
		destination: destination
	};
}