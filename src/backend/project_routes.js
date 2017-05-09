var Project = require('./schemas/project');

module.exports = function () {
    var functions = {};

    functions.createProject = function(req, res){
        var project = new Project({
            name: req.query.name,
            users: [req.query.user_id]
        });
        project.save()
            .then(function(project) {
                    console.log(project);
                    res.send(project);
                },
                function(err) {
                    console.log(err);
                    res.send({
                        code: err.code,
                        message: err.errmsg
                    });
                });
    }
    functions.updateProject = function(req, res){
        var options = {
            $set: { name: req.query.name}
        }
        Project.findByIdAndUpdate(req.query.id, options, { new: true },
            function (err, project) {
                if (err) {
                    res.send({
                        message: err.message
                    });
                    return res;
                };
                res.send(project);
            });
    }

    functions.findById = function(req, res){
        console.log(req);
        Project.findById(req.params.id, function (err, project) {
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