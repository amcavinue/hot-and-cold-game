var express = require('express');
var util = require('util');
var path = require('path');

var app = express();
app.use(express.static('build'));  // Serve the build folder.

var guesses = [];

/**
 * Routes
 */
app.get('/fewest-guesses', function(req, res) {
    var min = Math.min.apply(Math, guesses);
    res.json(min);
});

app.post('/fewest-guesses', function(req, res) {
    guesses.push(req.body.guesses);
    res.status(200);
});

/**
 * Run the server
 */
var runServer = function(callback) {
    app.listen(8080, function() {
        console.log('Listening on localhost');
    });
};

// If command line: node server.js
// run the runServer function with callback.
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