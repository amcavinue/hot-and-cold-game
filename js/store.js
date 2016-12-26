var reducers = require('./reducers/index');
var _ = require('lodash');
var redux = require('redux');
var createStore = redux.createStore;

var store = createStore(reducers.reducer);

/**
 * Listen for the case when the user inputs the same number.
 * Listen for the case when the user guesses the right number.
 * Alert the user of this.
 */
let currentValue;
function handleChange() {
  let previousValue = currentValue;
  currentValue = store.getState().guesses;
    
  if (store.getState.guesses) {
      if (_.isEqual(previousValue, currentValue)) {
          window.alert('You\'ve already chosen that number.');
      } else if (store.getState().targetNumber === 
                 store.getState().guesses[store.getState.guesses.length - 1]) {
          // Else if the last guess in the array equals the targetNumber
          window.alert('You won the game! Click new game to play again.');
      }
  }
}
let unsubscribe = store.subscribe(handleChange);

module.exports  = store;