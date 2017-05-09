/**
 * Created by OShandrak on 24/04/2017.
 */
'use strict';

module.exports = function () {
    var express = require('express');
    var user_routes = require('./backend/user_routes.js');
    var project_routes = require('./backend/project_routes.js');
    var app = express();
    var methodOverride = require('method-override');
    var bodyParser = require('body-parser');
    var router = express.Router();

    // all environments
    app.use(express.static(__dirname + '/src'));
    app.set('port', process.env.PORT || 3000);
    app.use(bodyParser.urlencoded({'extended': 'true'})); // parse application/x-www-form-urlencoded
    app.use(bodyParser.json()); // parse application/json
    app.use(bodyParser.json({type: 'application/vnd.api+json'})); // parse application/vnd.api+json as json
    app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With,     Content-Type, Accept");
        next();
    });

    app.route('/login').post(user_routes().login);
    app.route('/signup').post(user_routes().signup);

    app.route('/user').get(user_routes().user);

    app.route('/createproject').post(project_routes().createProject);
    app.route('/updateproject').post(project_routes().updateProject);
    app.route('/project/:id').get(project_routes().findById);


    return app;

}