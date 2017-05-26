/**
 * Created by OShandrak on 24/04/2017.
 */
var User = require('./schemas/user');
var Token = require('./schemas/token');

module.exports = function () {
    var functions = {};

    functions.login = function(req, res) {
        console.log(req);
        User.findOne({email: req.body.email, password: req.body.password}, function (err, user) {
            console.log(req.body);
            if (err){
                console.log(err);
                res.send({
                    message: err.message
                });
                return res;
            }
            if(!user) {
                res.send({
                    message: "Incorrect email or password"
                });
                return res;
            }
            console.log("User -" + user);
            Token.findOne({user_id:user.id}, function(err, token){
                if (err){
                    console.log(err);
                    res.send({
                        message: err.message
                    });
                    return res;
                }

                if(!token) {
                    token = new Token({
                        user_id: user.id,
                        token_value: user.id
                    });
                    token.save().then(function(token){
                            console.log(token);
                            res.send({token:token});
                    },
                    function(err){
                        console.log(err)
                        res.send({
                            code: err.code,
                            message: err.errmsg
                        });
                    })
                }else {
                    res.send({token: token.token_value, expired: token.expired});
                }
            });
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

    functions.findUserById = function(req, res) {
        User.findById(req.params.id, function(err, user) {
            res.send(user);
        });
    };

    return functions;

};