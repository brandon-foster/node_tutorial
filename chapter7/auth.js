var passport = require('passport'), // main library
	LocalStrategy = require('passport-local').Strategy; // Strategry property
														// from passport-local
														// module

passport.use(new LocalStrategy( // most flexible strategy for custom login
							    // logic
	function(username, password, done) {
		if (username === 'admin' && password === 'password') {
			return done(null, {username: 'admin'});
		}

		return done(null, false);
	}
));

passport.serializeUser(function(user, done) {
	done(null, user.username);
});

passport.deserializeUser(function(username, done) {
	done(null, {username: username});
});

module.exports = passport;