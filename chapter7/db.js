var mongoose = require('mongoose');

// connect to the mongoDB database
mongoose.connect('mongodb://<username>:<password>@ds051868.mongolab.com:51868/flights');

module.exports = mongoose.connection;
