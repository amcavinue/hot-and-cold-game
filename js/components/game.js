var React = require('react');
var ReactDOM = require('react-dom');
var connect = require('react-redux').connect;

var GuessForm = require('./guess-form');
var Results = require('./results');
var actions = require('../actions/index');

var Game = React.createClass({
    newGame: function() {
        this.props.dispatch(actions.newGame());
    },
    render: function() {
        return (
            <div>
                <button id="js-new-game" type="button" onClick={this.newGame}>New Game</button>
                <GuessForm state={this.props} />
                <Results state={this.props} />
            </div>
        );
    }
});

var mapStateToProps = function(state, props) {
    return {
        targetNumber: state.targetNumber,
        guesses: state.guesses,
        responses: state.responses
    };
};

var Container = connect(mapStateToProps)(Game);

module.exports = Container;