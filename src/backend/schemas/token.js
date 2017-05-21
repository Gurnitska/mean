/**
 * Created by OShandrak on 21/05/2017.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
mongoose.Promise = Promise;

module.exports = mongoose.model('Token', {
    user_id: { type : String , required : true },
    token_value: { type: String, required: true},
    expired: { type: Date, default: new Date(+new Date() + 24*60*60*1000)}

});