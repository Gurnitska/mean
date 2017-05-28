var Sprint = require('./schemas/sprint');

module.exports = function () {
    var functions = {};

    functions.createSprint = function(req, res){
        var sprint = new Sprint({
            name: req.query.name
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
            $set: { name: req.query.name}
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

    return functions;
};