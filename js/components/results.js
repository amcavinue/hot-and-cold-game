var React = require('react');
var ReactDOM = require('react-dom');

var Results = React.createClass({
    renderGuesses: function() {
        var guesses = [(
            <td key={'guesses'}><strong>Guess</strong></td>
        )];
        
        for (let i = 0; i < this.props.state.guesses.length; i++) {
            guesses.push(
                <td key={this.props.state.guesses[i]} >{ this.props.state.guesses[i] }</td>
            );
        }
        return guesses;
    },
    renderResponses: function() {
        var responses = [(
            <td key={'responses'}><strong>Response</strong></td>
        )];
        
        for (let i = 0; i < this.props.state.responses.length; i++) {
            responses.push(
                <td key={this.props.state.guesses[i]} >{ this.props.state.responses[i] }</td>
            );
        }
        return responses;
    },
    render: function() {
        return (
            <table>
                <tbody>
                    <tr>
                        { this.renderGuesses() }
                    </tr>
                    <tr>
                        { this.renderResponses() }
                    </tr>
                </tbody>
            </table>
        );
    }
});

module.exports = Results;