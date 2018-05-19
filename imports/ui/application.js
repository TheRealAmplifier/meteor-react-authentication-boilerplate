import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Link } from 'react-router';

class Application extends Component {
	onLogout() {
		browserHistory.push('/');
	}
	render() {
		return (
			<div>
				<h1>Welcome to the application </h1>
				
				<button onClick={this.onLogout.bind(this)}>Logout</button>
			</div>
		);
	}
};

export default Application;