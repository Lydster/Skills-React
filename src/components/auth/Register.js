import React from "react";
//import { Input, Button } from "../../styledComps";
import { Input, Button } from "react-materialize";

class Register extends React.Component {
  state = {
    credentials: {
      location: "",
      population: "",
      password: "",
      zipcode: ""
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

  register = e => {
    e.preventDefault();

    this.props
      .register(this.state.credentials)
      .then(() => this.props.history.push("/private"));
  };

  render() {
    return (
      <div className="register-container">
        <form onSubmit={this.register}>
          <Input
            type="text"
            name="location"
            value={this.state.credentials.location}
            onChange={this.handleChange}
            placeholder="location"
          />
          <Input
            type="number"
            name="population"
            value={this.state.credentials.population}
            onChange={this.handleChange}
            placeholder="population"
          />
          <Input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
            placeholder="password"
          />
          <Input
            type="number"
            name="zipcode"
            value={this.state.credentials.zipcode}
            onChange={this.handleChange}
            placeholder="zipcode"
          />
          <Button>Register</Button>
        </form>
      </div>
    );
  }
}

export default Register;
