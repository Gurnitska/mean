var Card = require('./schemas/card'),
    mongoose = require('mongoose');

module.exports = function () {
    var functions = {};

    functions.createCard = function(req, res){
        var card = new Card({
            name: req.query.name,
            description: req.query.description,
            status: "TODO",
            asignee_id: req.query.asignee_id,
            project_id: req.query.project_id
        });
        console.log(req.query);
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
        Card.findOne({_id : req.params.id}).
            populate('project_id', '').
            populate('sprint_id', 'name').
            populate('asignee_id', 'email').
            exec(function (err, card) {
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
        console.log("Delete card method!!!!!!!!!");
        console.log(req);
        Card.find({_id:req.params.id}).remove().exec();
    }

    functions.deleteCards = function(req, res){
        console.log("Delete cards method!!!!!!!!!");
        console.log(req.query.ids);
        var objectIds = [];
        var ids = req.query.ids.split(',');
        console.log(ids);
        ids.forEach(function(item){
            objectIds.push(mongoose.Types.ObjectId(item));
            console.log(item);
        })
        if(objectIds && objectIds.length > 0) {
            console.log(objectIds);
            Card.find({
                '_id': {$in: ids}
            }).remove().exec();
        }

    }

    return functions;
};