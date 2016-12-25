var actions = require('../actions/index');
var update = require('react-addons-update');

var initialState = {
    targetNumber: null,
    guesses: []
};

var reducer = function(state, action) {
    state = state || initialState;
    if (action.type === actions.TARGET_NUMBER) {
        return update(state, {
            targetNumber: {$set: Math.floor(Math.random() * 100) + 1}
        });
    }
    else if (action.type === actions.SUBMIT_GUESS) {
        for (var i = 0; i < state.guesses.length; i++) {
            if (action.guess === state.guesses[i]) {
                // throw new Error('That guess has already been made.');
                return state;
            }
        }
        
        return update(state, {
            guesses: {$push: [action.guess]}
        });
    }
    /*else if (action.type === actions.RETURN_ANSWER) {
        
        return state;
    }*/

    return state;
};

exports.reducer = reducer;