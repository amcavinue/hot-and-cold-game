var fetch = require('isomorphic-fetch');

var NEW_GAME = 'NEW_GAME';
var newGame = function() {
    return {
        type: NEW_GAME,
        newGame: true
    };
};

var SUBMIT_GUESS = 'SUBMIT_GUESS';
var submitGuess = function(guess) {
    return {
        type: SUBMIT_GUESS,
        guess: guess
    };
};

var RESET_ALERTS = 'RESET_ALERTS';
var resetAlerts = function(value) {
    return {
        type: RESET_ALERTS,
    };
};

var fetchFewestGuesses = function() {
    return function(dispatch) {
        var url = '/fewest-guesses';
        return fetch(url)
        .then(function(response) {
            // If any response other than successful.
            if (response.status < 200 || response.status >= 300) {
                var error = new Error(response.statusText)
                error.response = response
                throw error;
            }
            return response;
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            return dispatch(
                fetchGuessesSuccess(data)
            );
        })
        .catch(function(error) {
            return dispatch(
                fetchGuessesError(error)
            );
        });
    }
};

var saveFewestGuesses = function(guess) {
    return function(dispatch) {
        var url = '/fewest-guesses';
        return fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                guess: guess
            })
        })
        .then(function(response) {
            // If any response other than successful.
            if (response.status < 200 || response.status >= 300) {
                var error = new Error(response.statusText)
                error.response = response
                throw error;
            }
            return response;
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            return dispatch(
                fetchGuessesSuccess(data)
            );
        })
        .catch(function(error) {
            return dispatch(
                fetchGuessesError(error)
            );
        });
    }
};

var FETCH_GUESSES_SUCCESS = 'FETCH_GUESSES_SUCCESS';
var fetchGuessesSuccess = function(lowestGuess) {
    return {
        type: FETCH_GUESSES_SUCCESS,
        lowestGuess: lowestGuess
    };
};

var FETCH_GUESSES_ERROR = 'FETCH_GUESSES_ERROR';
var fetchGuessesError = function(error) {
    return {
        type: FETCH_GUESSES_ERROR,
        error: error
    };
};

exports.NEW_GAME = NEW_GAME;
exports.newGame = newGame;
exports.SUBMIT_GUESS = SUBMIT_GUESS;
exports.submitGuess = submitGuess;
exports.RESET_ALERTS = RESET_ALERTS;
exports.resetAlerts = resetAlerts;
exports.fetchFewestGuesses = fetchFewestGuesses;
exports.saveFewestGuesses = saveFewestGuesses;
exports.FETCH_GUESSES_SUCCESS = FETCH_GUESSES_SUCCESS;
exports.fetchGuessesSuccess = fetchGuessesSuccess;
exports.FETCH_GUESSES_ERROR = FETCH_GUESSES_ERROR;
exports.fetchGuessesError = fetchGuessesError;