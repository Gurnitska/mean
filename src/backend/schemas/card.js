/**
 * Created by OShandrak on 27/04/2017.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
mongoose.Promise = Promise;

module.exports = mongoose.model('Card', {
    name: { type : String , required : true },
    description: { type : String , required : true },
    status: { type : String , required : true, default: "TODO" },
    asignee_id: { type: Schema.Types.ObjectId, ref: 'User' },
    sprint_id: { type: Schema.Types.ObjectId, ref: 'Sprint' },
    project_id: { type: Schema.Types.ObjectId, ref: 'Project' }
});