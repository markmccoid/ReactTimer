var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer', () => {
	it('should exist', () => {
		expect(Timer).toExist();
	});

	it('should pause timer on paused status', (done) => {
		var timer = TestUtils.renderIntoDocument(<Timer />);

		timer.setState({count: 10});
		timer.handleStatusChange('started');
		timer.handleStatusChange('paused');

		setTimeout(() => {
			expect(timer.state.countdownStatus).toBe('paused');
			expect(timer.state.count).toBe(10);
			done();
		}, 1000);

	});

});	