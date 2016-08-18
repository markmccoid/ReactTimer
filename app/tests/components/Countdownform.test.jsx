var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Countdownform = require('Countdownform');

describe('Countdownform', () => {
	it('should exist', () => {
		expect(Countdownform).toExist();
	});
	it('should call onSetCountdown if valid seconds entered', () => {
		var spy = expect.createSpy();
		var countdownform = TestUtils.renderIntoDocument(<Countdownform onSetCountdown={spy}/>);
		var $el = $(ReactDOM.findDOMNode(countdownform));

		countdownform.refs.seconds.value = '109';
		TestUtils.Simulate.submit($el.find('form')[0]);
		expect(spy).toHaveBeenCalledWith(109);
	});
	it('should not call onSetCountdown if invalid seconds entered', () => {
		var spy = expect.createSpy();
		var countdownform = TestUtils.renderIntoDocument(<Countdownform onSetCountdown={spy}/>);
		var $el = $(ReactDOM.findDOMNode(countdownform));

		countdownform.refs.seconds.value = 'abc';
		TestUtils.Simulate.submit($el.find('form')[0]);
		expect(spy).toNotHaveBeenCalled();
	})
});
