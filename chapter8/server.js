var http = require('http'),
	flights = require('./data'),
	db = require('./db'),
	argv = require('optimist').argv, // creates an object that has
									 //properties and values passed to command line
	app = require('./app')(flights, db);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

// use command line property-value pairs to set
// specified destinations on specified flights
if (argv.flight && argv.destination) {
  flights[argv.flight].data.destination = argv.destination;
}