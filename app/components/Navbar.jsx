var React = require('react');
var {Link, IndexLink} = require('react-router');

var Navbar = React.createClass({
	render: function () {
		return (
			<div className="top-bar menuBackground">
				<div className="top-bar-left">
					<ul className="menu menuBackground">
						<li className="menu-text"> React Timer App</li>
						<li>
							<IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Timer </IndexLink>
						</li>
						<li>
							<Link to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}> Countdown </Link>
						</li>	
					</ul>
				</div>
				<div className="top-bar-right">
					<ul className="menu menuBackground">
						<li className="menu-text"> Created By Me!</li>			
					</ul>
				</div>
		</div>
		);
	}
});

module.exports = Navbar;