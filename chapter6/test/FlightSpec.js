var app = require('./helpers/app');

var should = require('should'),
	supertest = require('supertest');
	
// start a unit test in mocha
// arguments: label for the suite, anonymous function that has individual unit tests
describe('flights', function() {
	
	// test get requests to /flight/18
	it('should return valid flight data for flight 18', function(done) {
		
		supertest(app)
		.get('/flight/18')
		.expect(200)
		.end(function(err, res) {
			res.status.should.equal(200);
			done();
		});
	});
	
	it('should return an error for an invalid flight', function(done) {
		supertest(app)
		.get('/flight/999999')
		.expect(404)
		.end(function(err, res) {
			res.status.should.equal(404);
			done();
		});
	});
	
	it('should mark a flight as arrived', function(done) {
		
		// a PUT request to /flight/[flight_number]/arrived
		// should send back {"status": "done"}
		supertest(app)
		.put('/flight/18/arrived')
		.expect(200)
		.end(function(err, res) {
			res.status.should.equal(200);
			res.body.status.should.equal('done');
			
			// after sending a PUT request to /flight/[flight_number]/arrived, a GET
			//request to /flight/[flight_number] should respond with a JSON object
			// containing an an "actualArrive" : "[number]" name-value pair
			supertest(app)
			.get('/flight/18')
			.expect(200)
			.end(function(err, res) {
				res.status.should.equal(200);
				res.body.actualArrive.should.not.equal(undefined);
				
				done();
			})
		});
	})
});