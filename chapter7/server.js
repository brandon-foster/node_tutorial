// new entry point for the application
// responsible for creating the server

var http = require('http'),
	flights = require('./data'), // require the flights data, which can
								 // be changed to anything easily in the future
	app = require('./app')(flights), // pass flights to app.js
	db = require('./db');// the db module exports the database connection

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
