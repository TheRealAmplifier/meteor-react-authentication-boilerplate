import React, { Component } from 'react';
import { Link } from 'react-router';

class SignUp extends Component {
	render() {
		return (
			<div>
				<h1>Sign Up</h1>
				{/* login form */}
				<Link to="/login">Login</Link>
			</div>
		);
	}
};

export default SignUp;