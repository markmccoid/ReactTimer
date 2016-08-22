var React = require('react');
var Clock = require('Clock');
var Countdownform = require('Countdownform');

var Countdown = React.createClass({
	getInitialState: function () {
		return {
			count: 0,
			countdownStatus: "stopped"};
	},
	componentDidUpdate: function (prevProps, prevState) {
		console.log(this.state.countdownStatus  + ' : ' + prevState.countdownStatus);
		if (this.state.countdownStatus != prevState.countdownStatus) {
			switch (this.state.countdownStatus) {
				case 'started':
					this.startTimer();
					break;
				case 'stopped':
					clearInterval(this.timer);
					break;
			}
		}
	},
	startTimer: function () {

		this.timer = setInterval(() => {
			var newCount = this.state.count -1;
			this.setState ({
				count: newCount >= 0 ? newCount : 0,
				countdownStatus: newCount <=0 ? "stopped" : this.state.countdownStatus
			});
		}, 1000);
	},
	handleSetCountdown: function (seconds) {
		this.setState({
			count: seconds,
			countdownStatus: "started"
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
