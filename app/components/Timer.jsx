var React = require('react');
var Clock = require('Clock');

var Timer = React.createClass({
	render: function() {
		return (
			<div>
				<h2>Timer Component</h2>
				<Clock totalSeconds={100}/>
			</div>
		);
	}
});

module.exports = Timer;