import React from "react";
import jwtdecode from "jwt-decode";
import { Route, Redirect } from "react-router-dom";

class PrivateRoute extends React.Component {
  componentDidMount() {
    if (localStorage.getItem("token")) {
      const token = localStorage.getItem("token").toString();
      const decoded = jwtdecode(token);
      if (Date.now() / 1000 > decoded.exp) {
        return localStorage.removeItem("token");
      }
      return this.props.setPrison(decoded.subject);
    }
  }
  render() {
    const { component: Component, token, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={props =>
          token ? <Component {...props} /> : <Redirect to="/login" />
        }
      />
    );
  }
}

export default PrivateRoute;
