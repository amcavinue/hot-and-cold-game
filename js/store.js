var redux = require('redux');
var createStore = redux.createStore;
var reducers = require('./reducers/index');
var store = createStore(reducers.reducer);
var _ = require('lodash');

/**
 * Listen for the case when the user inputs the same number.
 * Alert the user of this.
 */
let currentValue;
function handleChange() {
  let previousValue = currentValue;
  currentValue = store.getState().guesses;

  if (_.isEqual(previousValue, currentValue)) {
    alert('You\'ve already chosen that number.');
  }
}
let unsubscribe = store.subscribe(handleChange);

module.exports  = store;