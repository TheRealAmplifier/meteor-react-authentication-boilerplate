import { Accounts } from 'meteor/accounts-base';

import React, { Component } from 'react';
import { Link } from 'react-router';

class SignUp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error: ''
		}
	}
	onFormSubmit(event) {
		event.preventDefault();

		let email = this.refs.email.value.trim();
		let password = this.refs.password.value.trim();


		Accounts.createUser( { email, password }, ( err ) => {
			console.log('Signup callback', err);
		});

		// this.setState({
		// 	error: 'Something went wrong'
		// });
	}
 	render() {
		return (
			<div>
				<h1>Sign Up</h1>

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
					<button>Create account</button>
				</form>

				<Link to="/login">Login</Link>
			</div>
		);
	}
};

export default SignUp;