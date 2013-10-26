
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());

// our own middleware for all requests that
app.use(function(req, res, next) {
  
  // resets the X-Powered-By header that Express places by default
  res.set('X-Powered-By', 'Flight Tracker');
  
  // must call the next function for server continue and return a  response
  // continues to the 'next' piece of middleware
  next();
});

app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// routes

app.get('/flight/:number', routes.flight);
app.put('/flight/:number/arrived', routes.arrived);
app.get('/list', routes.list);
app.get('/list/json', routes.listJson);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
