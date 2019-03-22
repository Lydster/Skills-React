import React from "react";
import jwtdecode from "jwt-decode";
import { Route, Redirect } from "react-router-dom";

class PrivateRoute extends React.Component {
	state = {
		prison: null
	};

	componentDidMount() {
		if (localStorage.getItem("token")) {
			const token = localStorage.getItem("token").toString();
			const decoded = jwtdecode(token);
			if (Date.now() / 1000 > decoded.exp) {
				return localStorage.removeItem("token");
			}
			this.setState({ prison: decoded.subject });
		}
	}
	render() {
		const { render: Component, ...rest } = this.props;
		return (
			<Route
				{...rest}
				render={props =>
					this.state.prison !== null ? (
						<Component {...props} prison={this.state.prison} />
					) : (
						<Redirect to="/login" />
					)
				}
			/>
		);
	}
}

export default PrivateRoute;
