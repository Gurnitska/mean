/**
 * Created by OShandrak on 27/04/2017.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
mongoose.Promise = Promise;


module.exports = mongoose.model('Project', {
    name: { type : String , required : true},
    users: [{ type: Schema.Types.ObjectId, ref: 'User' }]
});