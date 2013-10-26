var app = require('./helpers/app');

var should = require('should'),
	supertest = require('supertest');
	
// start a unit test in mocha
// arguments: label for the suite, anonymous function that has individual unit tests
describe('flights', function() {
	
	it('should pass', function(done) {
		done();
	});
	
	it('should not pass', function(done) {
		throw "don't pass";
		done();
	});
});