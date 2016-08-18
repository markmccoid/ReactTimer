var React = require('react');
var Clock = require('Clock');
var Countdownform = require('Countdownform');

var Countdown = React.createClass({
	getInitialState: function () {
		return {count: 0};
	},
	handleSetCountdown: function (seconds) {
		this.setState({
			count: seconds
		})
	},
	render: function() {
		return (
			<div>
				<Clock totalSeconds={this.state.count} />
				<Countdownform onSetCountdown={this.handleSetCountdown}/>
			</div>
		);
	}
});

module.exports = Countdown;