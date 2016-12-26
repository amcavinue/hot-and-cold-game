var React = require('react');
var ReactDOM = require('react-dom');

var actions = require('../actions/index');

var GuessForm = React.createClass({
    handleSubmit: function(e) {
        e.preventDefault();
        this.props.state.dispatch(actions.submitGuess(this.guessInput.value));
        this.guessInput.value = '';
    },
    render: function() {
        return (
            <form action="" method="" onSubmit={this.handleSubmit}>
                <fieldset>
                  <legend>Guess a number between 1 and 100:</legend>
                  <div>
                      <label>
                        Guess: 
                        <input type="number" id="guess" name="guess" max="100" min="1" ref={(element) => { this.guessInput = element; } }/>
                      </label>
                  </div>
                </fieldset>
            
                <input type="submit" value="Submit" name="submit" />
            </form>
        );
    }
});

module.exports = GuessForm;