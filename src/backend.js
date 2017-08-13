/**
 * Created by OShandrak on 24/04/2017.
 */
'use strict';

module.exports = function () {
    var express = require('express');
    var user_routes = require('./backend/user_routes.js');
    var project_routes = require('./backend/project_routes.js');
    var sprint_routes = require('./backend/sprint_routes.js');
    var card_routes = require('./backend/card_routes.js');
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
        res.header('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
        res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
        next();
    });

    app.route('/login').post(user_routes().login);
    app.route('/signup').post(user_routes().signup);

    app.route('/users').get(user_routes().user);
    app.route('/users/:id').get(user_routes().findUserById);

    app.route('/projects').post(ensureAuthorized, project_routes().createProject);
    app.route('/projects/:id').delete(ensureAuthorized, project_routes().deleteProject);
    app.route('/projects/:id').get(ensureAuthorized, project_routes().findProjectById);
    app.route('/projects').get(ensureAuthorized, project_routes().projects);
    app.route('/users/:user_id/projects').get(ensureAuthorized, project_routes().findProjectByUserId);
    // app.route('/projects/:id/cards').get(ensureAuthorized, project_routes().findProjectByUserId);

    app.route('/sprints').post(ensureAuthorized, sprint_routes().createSprint);
    app.route('/sprints/:id').post(ensureAuthorized, sprint_routes().updateSprint);
    app.route('/sprints/:id').get(ensureAuthorized, sprint_routes().findSprintById);
    app.route('/users/:user_id/sprints').get(ensureAuthorized, sprint_routes().findSprintByUserId);
    app.route('/projects/:project_id/sprints').get(ensureAuthorized, sprint_routes().findSprintByProjectId);

    app.route('/cards').post(ensureAuthorized, card_routes().createCard);
    app.route('/cards/deleteids').post(ensureAuthorized, card_routes().deleteCards);
    app.route('/cards/:id').post(ensureAuthorized, card_routes().updateCard);
    app.route('/cards/:id').get(ensureAuthorized, card_routes().findCardById);
    app.route('/cards/:id').delete(ensureAuthorized, card_routes().deleteCard);
    app.route('/users/:user_id/cards').get(ensureAuthorized, card_routes().findCardByUserId);
    app.route('/projects/:project_id/cards').get(ensureAuthorized, card_routes().findCardsByProjectId);

    function ensureAuthorized(req, res, next) {
        var bearerToken;
        var bearerHeader = req.headers["authorization"];
        if (typeof bearerHeader !== 'undefined') {
            var bearer = bearerHeader.split(" ");
            bearerToken = bearer[1];
            req.token = bearerToken;
            next();
        } else {
            res.sendStatus(403);
        }
    }

    return app;

}