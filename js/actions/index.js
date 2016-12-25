var TARGET_NUMBER = 'TARGET_NUMBER';
var targetNumber = function() {
    return {
        type: TARGET_NUMBER,
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

/*var RETURN_ANSWER = 'RETURN_ANSWER';
var returnAnswer = function(answer) {
    return {
        type: RETURN_ANSWER,
        answer: answer
    };
};
*/
exports.TARGET_NUMBER = TARGET_NUMBER;
exports.targetNumber = targetNumber;
exports.SUBMIT_GUESS = SUBMIT_GUESS;
exports.submitGuess = submitGuess;
/*exports.RETURN_ANSWER = RETURN_ANSWER;
exports.returnAnswer = returnAnswer;*/