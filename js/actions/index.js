var TARGET_NUMBER = 'TARGET_NUMBER';
var targetNumber = function(number) {
    return {
        type: TARGET_NUMBER,
        newGame: true,
        newNumber: number
    }
};

var SUBMIT_GUESS = 'SUBMIT_GUESS';
var submitGuess = function(guess) {
    return {
        type: SUBMIT_GUESS,
        guess: guess
    };
};

var RETURN_ANSWER = 'SUBMIT_GUESS';
var returnAnswer = function(answer) {
    return {
        type: RETURN_ANSWER,
        answer: answer
    };
};

exports.ADD_REPOSITORY = ADD_REPOSITORY;
exports.addRepository = addRepository;
exports.RATE_REPOSITORY = RATE_REPOSITORY;
exports.rateRepository = rateRepository;
