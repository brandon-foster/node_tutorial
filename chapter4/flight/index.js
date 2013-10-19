// flight counter and destinations holder
var count = 0,
	destinations = [];

// for new objects
var Flight = function() {
	this.data = {
		number: null,
		origin: null,
		destination: null,
		departs: null,
		arrives: null,
		actualDepart: null,
		actualArrive: null
	};
	
	// populate the flight properties
	this.fill = function(info) {
		for(var prop in this.data) {
			if(this.data[prop] !== 'undefined') {
				this.data[prop] = info[prop];
			}
		}
	};
	
	this.triggerDepart = function() {
		this.data.actualDepart = Date.now();
	};
	this.triggerArrive = function() {
		this.data.actualArrive = Date.now();
	};
	
	this.getInformation = function() {
		return this.data;
	};
}

// instead of module.exports
exports.create = function(info) {
	var instance = new Flight();
	
	instance.fill(info);
	
	count++;
	if (destinations.indexOf(info['destination']) < 0) {
		destinations.push(info['destination']);
	}
	
	return instance;
}

// count getter
exports.getCount = function() {
	return count;
}

// destinations getter
exports.getDestinations = function() {
	return destinations;
}