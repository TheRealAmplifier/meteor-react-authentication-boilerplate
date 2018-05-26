import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

import React, { Component } from 'react';
import { Link } from 'react-router';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error: ''
		};
	}
	onFormSubmit(event) {
		event.preventDefault();

		let email = this.refs.email.value.trim();
		let password = this.refs.password.value.trim();

		Meteor.loginWithPassword({email}, password, (err) => {
			console.log('Login callback', err);
		});
	}
	render() {
		return (
			<div>
				<h1>Login</h1>

				{ this.state.error ? <p>{this.state.error}</p> : undefined }

				<form onSubmit={this.onFormSubmit.bind(this)}>
					<fieldset>
						<label htmlFor="email">Email address</label>
						<input type="email"ref="email" name="email" />
					</fieldset>
					<fieldset>
						<label htmlFor="password">Password</label>
						<input type="password" ref="password" name="password" />
					</fieldset>
					<button>Login</button>
				</form>

				<Link to="/signup">Create account</Link>
			</div>
		);
	}
};

export default Login;