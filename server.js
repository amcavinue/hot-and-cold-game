var express = require('express');
var util = require('util');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
app.use(express.static('build'));  // Serve the build folder.
app.use(bodyParser.json()); // Used for getting parameters in post requests.

var guesses = [];

/**
 * Routes
 */
app.get('/fewest-guesses', function(req, res) {
    // Get the minimum number of guesses taken to win the game.
    var min = Math.min.apply(Math, guesses);
    res.status(200).json(min);
});

app.post('/fewest-guesses', function(req, res) {
    guesses.push(req.body.guess);
    var min = Math.min.apply(Math, guesses);
    res.status(200).json(min);
});

/**
 * Run the server
 */
var runServer = function(callback) {
    app.listen(8080, function() {
        console.log('Listening on localhost');
    });
};

// If command line `node server.js` run the runServer function.
if (require.main === module) {
    runServer(function(err) {
        if (err) {
            console.error(err);
        }
    });
};

/**
 * Exports
 */
exports.app = app;
exports.runServer = runServer;