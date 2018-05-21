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

		this.setState({
			error: 'Something went wrong'
		});
	}
 	render() {
		return (
			<div>
				<h1>Sign Up</h1>

				{ this.state.error ? <p>{this.state.error}</p> : undefined }

				<form onSubmit={this.onFormSubmit.bind(this)}>
					<fieldset>
						<label for="email">Email address</label>
						<input type="email" name="email" />
					</fieldset>
					<fieldset>
						<label for="email">Password</label>
						<input type="password" name="password" />
					</fieldset>
					<button>Create account</button>
				</form>

				<Link to="/login">Login</Link>
			</div>
		);
	}
};

export default SignUp;