/**
 * Created by OShandrak on 24/04/2017.
 */
var User = require('./schemas/user');

module.exports = function () {
    var functions = {};

    functions.login = function(req, res) {
        console.log(req);
        User.findOne({email: req.body.email,
            password: req.body.password},
            function (err, user) {
            if (err){
                console.log(err);
                res.send({
                    message: err.message
                });
                return res;
            }
            console.log(user);
            if(!user) {
                res.send({error:"Incorrect email or password"});
            }else {
                res.send({user: user});
            }

        })
    };

    functions.signup = function(req, res) {
        var user = new User({
            email: req.query.email,
            password: req.query.password
        });
        console.log(user);


        user.save()
            .then(function(user) {
                    console.log(user);
                    res.send({
                        email: user.email
                    });
                },
                function(err) {
                    console.log(err)
                    res.send({
                        code: err.code,
                        message: err.errmsg
                    });
            });

    };

    functions.user = function(req, res) {
        User.find({}, function(err, users) {
            res.send(users);
        });
    };

    return functions;

};