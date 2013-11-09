var mongoose = require('mongoose');

mongoose.connect('mongodb://flights:flights@ds051868.mongolab.com:51868/flights');

module.exports = mongoose.connection;