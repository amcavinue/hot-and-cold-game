var NEW_GAME = 'TARGET_NUMBER';
var newGame = function() {
    return {
        type: NEW_GAME,
        newGame: true
    }
};

var SUBMIT_GUESS = 'SUBMIT_GUESS';
var submitGuess = function(guess) {
    return {
        type: SUBMIT_GUESS,
        guess: guess
    };
};

exports.TARGET_NUMBER = NEW_GAME;
exports.targetNumber = newGame;
exports.SUBMIT_GUESS = SUBMIT_GUESS;
exports.submitGuess = submitGuess;