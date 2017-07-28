/**
 * Created by OShandrak on 27/04/2017.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
mongoose.Promise = Promise;

module.exports = mongoose.model('Sprint', {
    name: { type : String , required : true },
    start_date: {type: Date},
    end_date: {type: Date},
    project_id: {type: Schema.Types.ObjectId, ref: 'Project'}
});