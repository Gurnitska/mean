/**
 * Created by OShandrak on 27/04/2017.
 */
var mongoose = require('mongoose');

module.exports = mongoose.model('User', {
    email: String,
    password: String
});