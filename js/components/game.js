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
    componentDidUpdate: function() {
        if (this.props.wonGame || this.props.alreadyGuessed) {
            this.props.dispatch(actions.resetAlerts());
        }
    },
    alerts: function() {
        if (this.props.alreadyGuessed) {
            alert('You\'ve already chosen that number.');
        } else if (this.props.wonGame) {
            alert('You won the game! Click new game to play again.');
        }
    },
    render: function() {
        this.alerts();
        
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
    console.log(state, 39);
    return {
        targetNumber: state.targetNumber,
        guesses: state.guesses,
        responses: state.responses,
        wonGame: state.wonGame,
        alreadyGuessed: state.alreadyGuessed
    };
};

var Container = connect(mapStateToProps)(Game);

module.exports = Container;