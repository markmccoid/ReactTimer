var React = require('react');

var Countdownform = React.createClass({
	onSubmit: function (e) {
		e.preventDefault();
		var strSeconds = this.refs.seconds.value;
console.log(strSeconds);
		if (strSeconds.match(/^[0-9]*$/)) {
			this.refs.seconds.value = '';
			this.props.onSetCountdown(parseInt(strSeconds,10));
		}
	},
	render: function () {
		return (
			<div>
				<form ref="form" onSubmit={this.onSubmit} className="countdown-form">
					<input type="text" ref="seconds" placeholder="Enter Time in Seconds"/>
					<button type="submit" className="button expanded">Start</button>
				</form>
			</div>
		);
	}
});

module.exports = Countdownform;