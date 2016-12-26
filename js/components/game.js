var React = require('react');
var ReactDOM = require('react-dom');
var connect = require('react-redux').connect;

var GuessForm = require('./guess-form');
var Results = require('./results');

var Game = function(props) {
    return (
        <div>
        </div>
    );
};

var mapStateToProps = function(state, props) {
    return {
        repositories: state
    };
};

var Container = connect(mapStateToProps)(RepositoryList);

module.exports = Container;