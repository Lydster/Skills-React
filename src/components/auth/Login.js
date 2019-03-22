import React from "react";
import { Route } from "react-router-dom";

class Login extends React.Component {
	state = {
		credentials: {
			location: "",
			password: ""
		}
	};

	handleChange = e => {
		this.setState({
			credentials: {
				...this.state.credentials,
				[e.target.name]: e.target.value
			}
		});
	};

	login = e => {
		e.preventDefault();

		this.props
			.login(this.state.credentials)
			.then(() => this.props.history.push("/private"));
	};

	render() {
		return (
			<div>
				<form onSubmit={this.login}>
					<input
						type="text"
						name="location"
						value={this.state.credentials.location}
						onChange={this.handleChange}
						placeholder="location"
					/>
					<input
						type="password"
						name="password"
						value={this.state.credentials.password}
						onChange={this.handleChange}
						placeholder="password"
					/>
					<button>Login</button>
				</form>
			</div>
		);
	}
}

export default Login;
