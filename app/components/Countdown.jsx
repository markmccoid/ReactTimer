var React = require('react');
var Clock = require('Clock');
var Countdownform = require('Countdownform');
var Controls = require('Controls');

var Countdown = React.createClass({
	getInitialState: function () {
		return {
			count: 0,
			countdownStatus: "stopped"};
	},
	componentDidUpdate: function (prevProps, prevState) {
		if (this.state.countdownStatus != prevState.countdownStatus) {
			switch (this.state.countdownStatus) {
				case 'started':
					this.startTimer();
					break;
				case 'stopped':
					this.setState({count: 0});
				case 'paused':
					clearInterval(this.timer);
					break;
			}
		}
	},
	componentWillUnmount: function () {
		clearInterval(this.timer);
		this.timer = undefined;
	},
	startTimer: function () {
		this.timer = setInterval(() => {
			var newCount = this.state.count - 1;
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
	handleStatusChange: function (newStatus) {
		this.setState({
			countdownStatus: newStatus
		});
	},
	render: function() {
		var {count, countdownStatus} = this.state;

		var renderControlArea = () => {
			if (countdownStatus !== 'stopped') {
				return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange} />
			} else {
				return <Countdownform onSetCountdown={this.handleSetCountdown}/>
			}
		};
		return (
			<div>
				<h1 className="page-titles">Countdown</h1>
				<Clock totalSeconds={this.state.count} />
				{renderControlArea()}
			</div>
		);
	}
});

module.exports = Countdown;
