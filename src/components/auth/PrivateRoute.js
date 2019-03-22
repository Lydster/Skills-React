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
      console.log(decoded.subject);
      console.log(this.state.prison);
      this.setState({ prison: decoded.subject });
      console.log(this.state.prison);
    }
  }
  render() {
    const { component: Admin, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={props =>
          this.state.prison !== null ? (
            <Admin {...props} />
          ) : (
            <Redirect to="/login" />
          )
        }
      />
    );
  }
}

export default PrivateRoute;
