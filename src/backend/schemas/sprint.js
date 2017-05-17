/**
 * Created by OShandrak on 27/04/2017.
 */
var mongoose = require('mongoose');
mongoose.Promise = Promise;

module.exports = mongoose.model('Sprint', {
    name: { type : String , required : true }
});