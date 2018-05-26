import React, { Component } from 'react';

class Application extends Component {
	onLogout() {
		Accounts.logout();
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