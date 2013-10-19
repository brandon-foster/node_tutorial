
/*
 * GET home page.
 */

var data = require('../data');

// require flight module
var flight = require('../flight');

exports.flight1 = function(req, res) {
  res.json(flight1.getInformation());
};

exports.flight2 = function(req, res) {
  res.json(flight2.getInformation());
};