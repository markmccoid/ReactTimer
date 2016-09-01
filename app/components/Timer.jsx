var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass({
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
	handleStatusChange: function (status) {
		this.setState({countdownStatus: status});
	},
	startButton: function () {
		this.setState({countdownStatus: 'started'});
	},
	startTimer: function () {

		this.timer = setInterval(() => {
			var count = this.state.count;
			count += 1;
			this.setState({count: count});
		}, 1000);
	},
	componentWillUnmount: function () {
		clearInterval(this.timer);
		this.timer = undefined;
	},
	render: function() {
		var { count, countdownStatus } = this.state;
		
		return (
			<div>
				<h2>Timer</h2>
				<Clock totalSeconds={count}/>
				<Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>
				
			</div>
		);
	}
});

module.exports = Timer;