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

    functions.updateCard = function(req, res){
        var options = {};
        if(!req.query.sprint_id){
            options = {
                $set: {
                    name : req.query.name,
                    description : req.query.description,
                    status : req.query.status,
                    asignee_id : req.query.asignee_id,
                    project_id : req.query.project_id
                },
                $unset : {
                    sprint_id : ""
                }
            }
        }else{
            options = {
                $set: {
                    name : req.query.name,
                    description : req.query.description,
                    status : req.query.status,
                    asignee_id : req.query.asignee_id,
                    project_id : req.query.project_id,
                    sprint_id : req.query.sprint_id
                }
            }
        }
        console.log("options");
        console.log(options);
        Card.findByIdAndUpdate(req.params.id, options, { new: true },
            function (err, card) {
                if (err) {
                    res.send({
                        message: err.message
                    });
                    return res;
                };
                res.send(card);
            });
    }

    functions.findCardById = function(req, res){
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
    functions.findCardByUserId = function(req, res){
        console.log(req);
        Card.find({asignee_id:req.params.user_id}, function (err, card) {
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

    functions.findCardsByProjectId = function(req, res){
        console.log(req);
        Card.find({project_id:req.params.project_id}, function (err, card) {
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

    functions.deleteCard = function(req, res){
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