var Sprint = require('./schemas/sprint');

module.exports = function () {
    var functions = {};

    functions.createSprint = function(req, res){
        var sprint = new Sprint({
            name: req.query.name,
            start_date:req.query.start_date,
            end_date:req.query.end_date,
            project_id : req.query.project_id
        });
        sprint.save()
            .then(function(sprint) {
                    console.log(sprint);
                    res.send(sprint);
                },
                function(err) {
                    console.log(err);
                    res.send({
                        code: err.code,
                        message: err.errmsg
                    });
                });
    }
    functions.updateSprint = function(req, res){
        var options = {
            $set: { name: req.query.name,
                start_date:req.query.start_date,
                end_date:req.query.end_date
            }
        }
        Sprint.findByIdAndUpdate(req.params.id, options, { new: true },
            function (err, sprint) {
                if (err) {
                    res.send({
                        message: err.message
                    });
                    return res;
                };
                res.send(sprint);
            });
    }

    functions.findSprintById = function(req, res){
        console.log(req);
        Sprint.findById(req.params.id, function (err, project) {
            if (err) {
                console.log(err);
                res.send({
                    message: err.message
                });
                return res;
            };
            res.send(project);
        });
    }
    functions.findSprintByUserId = function(req, res){
        console.log(req);
        Sprint.find({users:req.params.user_id}, function (err, project) {
            if (err) {
                console.log(err);
                res.send({
                    message: err.message
                });
                return res;
            };
            res.send(project);
        });
    }

    functions.findSprintByProjectId = function(req, res){
        console.log(req);
        Sprint.find({project_id:req.params.project_id}, function (err, sprints) {
            if (err) {
                console.log(err);
                res.send({
                    message: err.message
                });
                return res;
            };
            console.log(sprints);
            res.send(sprints);
        });
    }

    return functions;
};