
/**
 * Module dependencies.
 */

// pass in db as an extra argument
module.exports = function (flights, db) {
	var express = require('express');
	// pass Express into connect-mongo
	var MongoStore = require('connect-mongo')(express);
	var routes = require('./routes')(flights);
	var path = require('path');	
	var app = express();

	// all environments
	app.set('port', process.env.PORT || 3000);
	app.set('views', __dirname + '/views');
	app.set('view engine', 'jade');
	app.use(express.favicon());
	app.use(express.logger('dev'));
	
	// setup Express to use sessions
	app.use(express.cookieParser()); // reads cookies that browser sends to
									 //the server
	app.use(express.session({		 // setup the session
		secret: 'randomized string', // encrypts session information
		store: new MongoStore({		 // where Express will store sessions
			mongoose_connection: db  // set the mongoose_connection property
									 // to the mongoDB connection
		})
	}));
	
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(function (req, res, next) {
		res.set('X-Powered-By', 'Flight Tracker');
		next();
	});
	app.use(app.router);
	app.use(express.static(path.join(__dirname, 'public')));

	// development only
	if ('development' == app.get('env')) {
	  app.use(express.errorHandler());
	}

	app.get('/flight/:number', routes.flight);
	app.put('/flight/:number/arrived', routes.arrived);
	app.get('/list', routes.list);
	app.get('/arrivals', routes.arrivals);

	return app;
}


