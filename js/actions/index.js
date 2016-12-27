var NEW_GAME = 'TARGET_NUMBER';
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

exports.NEW_GAME = NEW_GAME;
exports.newGame = newGame;
exports.SUBMIT_GUESS = SUBMIT_GUESS;
exports.submitGuess = submitGuess;
exports.RESET_ALERTS = RESET_ALERTS;
exports.resetAlerts = resetAlerts;