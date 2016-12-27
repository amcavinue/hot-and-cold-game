var reducers = require('./reducers/index');
var _ = require('lodash');
var redux = require('redux');
var createStore = redux.createStore;

var actions = require('./actions/index');
var store = createStore(reducers.reducer);

module.exports  = store;