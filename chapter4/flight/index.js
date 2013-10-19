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

// pass in an info object, the values of which will be used used to set the
// values of the values object
module.exports = function(info) {
	var instance = new Flight();
	
	instance.fill(info);
	
	return instance;
};