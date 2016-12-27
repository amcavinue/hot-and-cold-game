var actions = require('../actions/index');
var update = require('react-addons-update');

var initialState = {
    targetNumber: null,
    guesses: [],
    responses: [],
    totalGuesses: 0,
    fewestGuesses: null,
    alreadyGuessed: false,
    wonGame: false
};

var reducer = function(state, action) {
    state = state || initialState;
    
    if (action.type === actions.NEW_GAME) {
        return update(state, {
            targetNumber: {$set: Math.floor(Math.random() * 100) + 1},
            guesses: {$set: []},
            responses: {$set: []},
            totalGuesses: {$set: 0},
            alreadyGuessed: {$set: false},
            wonGame: {$set: false}
        });
    }
    else if (action.type === actions.SUBMIT_GUESS) {
        for (var i = 0; i < state.guesses.length; i++) {
            if (action.guess === state.guesses[i]) {
                return update(state, {
                    alreadyGuessed: {$set: true},
                });
            }
        }
        
        if (Number(action.guess) === Number(state.targetNumber)) {
            return update(state, {
                totalGuesses: {$set: state.totalGuesses + 1},
                wonGame: {$set: true},
            });
        }
        
        var distance = Math.abs(state.targetNumber - action.guess);
        var response;
        if (distance < 5) {
            response = "Hot";
        } else if (distance < 10) {
            response = "Very warm";
        } else if (distance < 20) {
            response = "Warm";
        } else {
            response = "Cold";
        }
        
        return update(state, {
            guesses: {$push: [action.guess]},
            responses: {$push: [response]},
            totalGuesses: {$set: state.totalGuesses + 1},
            alreadyGuessed: {$set: false},
            wonGame: {$set: false}
        });
    }
    else if (action.type === actions.RESET_ALERTS) {
        return update(state, {
            alreadyGuessed: {$set: false},
            wonGame: {$set: false}
        });
    } else if (action.type === actions.FETCH_GUESSES_SUCCESS) {
        return update(state, {
            fewestGuesses: {$set: action.lowestGuess}
        });
    } else if (action.type === actions.FETCH_GUESSES_ERROR) {
        console.log('An error occurred: ' + action.error);
        return state;
    }

    return state;
};

exports.reducer = reducer;