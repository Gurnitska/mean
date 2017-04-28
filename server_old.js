// set up ======================================================================
var express = require('express');
var app = express(); 						// create our app w/ express
var mongoose = require('mongoose'); 				// mongoose for mongodb
var passport = require('passport');
// var jwt = require('jwt-simple');
var port = process.env.PORT || 5555; 				// set the port
var database = require('./src/app/config/database'); 			// load the database config
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');


// configuration ===============================================================
mongoose.connect(database.localUrl); 	// Connect to local MongoDB instance. A remoteUrl is also available (modulus.io)

app.use(express.static(__dirname + '/src')); 		// set the static files location /public/img will be /img for users
app.use(morgan('dev')); // log every request to the console
app.use(passport.initialize()); // Use the passport package in our application
app.use(bodyParser.urlencoded({'extended': 'true'})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({type: 'application/vnd.api+json'})); // parse application/vnd.api+json as json
app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request

// pass passport for configuration
require('./src/app/config/passport')(passport);
// services ======================================================================
require('./src/app/services/userService.js')(app);

// application -------------------------------------------------------------
app.get('*', function(req, res) {
    res.sendfile('./src/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});

// listen (start app with node server_old.js) ======================================
app.listen(port);
console.log("App listening on port " + port);