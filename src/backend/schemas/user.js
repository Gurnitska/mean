/**
 * Created by OShandrak on 27/04/2017.
 */
var mongoose = require('mongoose');
mongoose.Promise = Promise;

module.exports = mongoose.model('User', {
    email: { type : String , unique : true, required : true },
    password: { type : String , required : true }
});