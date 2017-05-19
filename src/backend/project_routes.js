var Project = require('./schemas/project');

module.exports = function () {
    var functions = {};

    functions.createProject = function(req, res){
        var project = new Project({
            name: req.query.name,
            description: req.query.description,
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


    functions.findProjectById = function(req, res){
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

    functions.deleteProject = function(req, res){
        console.log(req);
        Project.remove(req.params.id, function (err, project) {
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