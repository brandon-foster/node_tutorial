// new entry point for the application
// responsible for creating the server

var http = require('http'),
	flights = require('./data'), // require the flights data, which can
								 // be changed to anything easily in the future
	db = require('./db');// the db module exports the database connection
	app = require('./app')(flights, db), // pass flights and mongoDB database to app.js

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
