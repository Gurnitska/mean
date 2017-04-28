/**
 * Created by OShandrak on 24/04/2017.
 */
var User = require('./schemas/user');

module.exports = function () {
    var functions = {};

    functions.login = function(req, res) {
        res.send('login');
    };

    functions.signup = function(req, res) {
        var user = new User({
            email: req.query.email,
            password: req.query.password
        });
        console.log(user);
        user.save(function (err) {
            if (err) return err;
            // saved!
        })
    };

    functions.user = function(req, res) {
        User.find({}, function(err, users) {
            res.send(users);
        });
    };

    return functions;

};