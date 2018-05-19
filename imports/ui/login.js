import React, { Component } from 'react';
import { Link } from 'react-router';

class Login extends Component {
	render() {
		return (
			<div>
				<h1>Login</h1>
				{/* login form */}
				<Link to="/signup">Create account</Link>
			</div>
		);
	}
};

export default Login;