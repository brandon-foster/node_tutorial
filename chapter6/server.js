// new entry point for the application
// responsible for creating the server

var http = require('http'),
	app = require('./app'); // store app.js


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
