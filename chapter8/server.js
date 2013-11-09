var http = require('http'),
	flights = require('./data'),
	repl = require('repl'); // require the repl
	db = require('./db'),
	app = require('./app')(flights, db);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

// set the prompt for the repl
var prompt = repl.start({prompt: 'flights> '});

// can use context to set properties that will be used as as global
// variables in this repl
prompt.context.data = flights;
