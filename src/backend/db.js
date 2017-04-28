/**
 * Created by OShandrak on 24/04/2017.
 */
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/task2');

module.exports = mongoose.connection;