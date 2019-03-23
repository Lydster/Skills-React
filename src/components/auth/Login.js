import React from "react";
import { Route } from "react-router-dom";


//import { Input, Button } from "../../styledComps";
import { Input, Button } from "react-materialize";

class Login extends React.Component {
  state = {
    credentials: {
      location: "",
      password: ""
    }
  };

  componentDidMount() {
    if (localStorage.getItem("token"))
      return this.props.history.push("/private");
  }

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

    this.props.login(this.state.credentials);
  };

  render() {
    return (
      <div className="login-container">
        <form onSubmit={this.login}>
          <Input
            type="text"
            name="location"
            value={this.state.credentials.location}
            onChange={this.handleChange}
            placeholder="location"
          />
          <Input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
            placeholder="password"
          />
          <Button>Login</Button>
        </form>
      </div>
    );
  }

}

export default Login;
