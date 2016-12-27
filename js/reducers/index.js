var actions = require('../actions/index');
var update = require('react-addons-update');

var initialState = {
    targetNumber: null,
    guesses: [],
    responses: [],
    alreadyGuessed: false,
    wonGame: false
};

var reducer = function(state, action) {
    state = state || initialState;
    
    if (action.type === actions.NEW_GAME) {
        return update(state, {
            targetNumber: {$set: Math.floor(Math.random() * 100) + 1},
            guesses: {$set: []},
            responses: {$set: []}
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
            alreadyGuessed: {$set: false},
            wonGame: {$set: false}
        });
    }
    else if (action.type === actions.RESET_ALERTS) {
        return update(state, {
            alreadyGuessed: {$set: false},
            wonGame: {$set: false}
        });
    }

    return state;
};

exports.reducer = reducer;