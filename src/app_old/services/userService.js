'use strict';

var User = require('./models/user');
var jwt         = require('jwt-simple');
var database = require('../config/database'); 

function getUsers(res) {
    User.find({}, function (err, users) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }
        res.json(users); // return all user in JSON format
    });
};

module.exports = function (app) {

    // api ---------------------------------------------------------------------
    // get all user
    app.get('/api/user', function (req, res) {
        // use mongoose to get all user in the database
        getUsers(res);
    });

    // create user and send back all user after creation
    app.post('/api/signup', function (req, res) {
        // req.body.username = 'q';
        // req.body.password = 'q';
        if (!req.body.username || !req.body.password) {
            res.json({success: false, msg: 'Please pass name and password.'});
        } else {
            var newUser = new User({
                username: req.body.username,
                password: req.body.password
            });
        // save the user
            newUser.save(function(err) {
                if (err) {
                    return res.json({success: false, msg: 'Username already exists.'});
                }
                res.json({success: true, msg: 'Successful created new user.'});
             });
        }
    });

    app.post('/api/authorize', function (req, res) {
        // req.body.username = 'q';
        // req.body.password = 'q';
        User.findOne({
            username: req.body.username
        }, function(err, user) {
            if (err) throw err;
 
            if (!user) {
                res.send({success: false, msg: 'Authentication failed. User not found.'});
            } else {
                // check if password matches
                user.comparePassword(req.body.password, function (err, isMatch) {
                    if (isMatch && !err) {
                        // if user is found and password is right create a token
                        var token = jwt.encode(user, database.secret);
                        // return the information including token as JSON
                        res.json({success: true, token: 'JWT ' + token});
                    } else {
                        res.send({success: false, msg: 'Authentication failed. Wrong password.'});
                    }
                });
            }
        });
    });

    // delete a user
    app.delete('/api/user/:user_id', function (req, res) {
        User.remove({
            _id: req.params.user_id
        }, function (err, user) {
            if (err)
                res.send(err);

            getUsers(res);
        });
    });
};