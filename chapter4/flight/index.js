// only exporting one function. a new function scope is created each time the
// function is called

// pass in an info object, the values of which will be used used to set the
// values of the values object
module.exports = function(info) {

	// define object for flight values
	var values = {
		number: null,
		origin: null,
		destination: null,
		departs: null,
		arrives: null,
		actualDepart: null,
		actualArrive: null
	};

	// sets values of the values object
	for(var prop in values) {
		if(values[prop] !== 'undefined') {
			values[prop] = info[prop];
		}
	}

	// define functions for:
	// departure time
	// arrival time
	// getter for the value object
	var functions = {
		triggerDepart: function() {
			values.actualDepart = Date.now();
		},
		triggerArrive: function() {
			values.actualArrive = Date.now();
		},
		getInformation: function() {
			return values;
		}
	};

	return functions; // return the functions object

};