var Card = require('./schemas/card');


module.exports = function () {
    var functions = {};

    functions.createCard = function(req, res){
        var card = new Card({
            name: req.query.name,
            description: req.query.description,
            status: "TODO",
            asignee_id: req.query.asignee_id,
            sprint_id: req.query.sprint_id,
            project_id: req.query.project_id
        });
        card.save()
            .then(function(card) {
                    console.log(card);
                    res.send(card);
                },
                function(err) {
                    console.log(err);
                    res.send({
                        code: err.code,
                        message: err.errmsg
                    });
                });
    }


    functions.findById = function(req, res){
        console.log(req);
        Card.findById(req.params.id, function (err, card) {
            if (err) {
                console.log(err);
                res.send({
                    message: err.message
                });
                return res;
            };
            res.send(card);
        });
    }

    functions.deleteProject = function(req, res){
        console.log(req);
        Card.remove(req.params.id, function (err, card) {
            if (err) {
                console.log(err);
                res.send({
                    message: err.message
                });
                return res;
            };
            res.send(card);
        });
    }

    return functions;
};