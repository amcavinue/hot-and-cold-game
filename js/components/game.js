var React = require('react');
var ReactDOM = require('react-dom');
var connect = require('react-redux').connect;

var GuessForm = require('./guess-form');
var Results = require('./results');
var actions = require('../actions/index');

var Game = React.createClass({
    componentDidUpdate: function() {
        if (this.props.wonGame || this.props.alreadyGuessed) {
            this.props.dispatch(actions.resetAlerts());
        }
    },
    newGame: function() {
        this.props.dispatch(actions.newGame());
    },
    render: function() {
        if (this.props.alreadyGuessed) {
            alert('You\'ve already chosen that number.');
        } else if (this.props.wonGame) {
            alert('You won the game! Click new game to play again.');
            this.props.dispatch(
                actions.saveFewestGuesses(this.props.totalGuesses)
            );
        }
        
        var lowScore;
        if (this.props.fewestGuesses) {
            lowScore = <p>The current low score is: {this.props.fewestGuesses} guesses</p>;
        }
        
        return (
            <div>
                {lowScore}
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
        responses: state.responses,
        totalGuesses: state.totalGuesses,
        fewestGuesses: state.fewestGuesses,
        wonGame: state.wonGame,
        alreadyGuessed: state.alreadyGuessed
    };
};

var Container = connect(mapStateToProps)(Game);

module.exports = Container;