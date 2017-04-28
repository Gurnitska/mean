/**
 * Created by OShandrak on 24/04/2017.
 */
'use strict';

module.exports = function () {
    var express = require('express');
    var routes = require('./backend/routes.js');
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


    app.route('/login').get(routes().login);
    app.route('/signup').post(routes().signup);

    app.route('/user').get(routes().user);

    return app;

}