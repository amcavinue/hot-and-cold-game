require('babel-polyfill');
var React = require('react');
var ReactDOM = require('react-dom');
var Provider = require('react-redux').Provider;

var store = require('./store');
var actions = require('./actions/index');
var Game = require('./components/game');

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the first game.
    store.dispatch(actions.newGame());

    ReactDOM.render(
        <Provider store={store}>
            <Game />
        </Provider>,
        document.getElementById('app')
    );
});