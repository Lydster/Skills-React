import React from "react";

class Register extends React.Component {
  state = {
    credentials: {
      location: "",
      population: "",
      password: "",
      zipcode: ""
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

  register = e => {
    e.preventDefault();

    this.props
      .register(this.state.credentials)
      .then(() => this.props.history.push("/private"));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.register}>
          <input
            type="text"
            name="location"
            value={this.state.credentials.location}
            onChange={this.handleChange}
            placeholder="location"
          />
          <input
            type="number"
            name="population"
            value={this.state.credentials.population}
            onChange={this.handleChange}
            placeholder="population"
          />
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
            placeholder="password"
          />
          <input
            type="number"
            name="zipcode"
            value={this.state.credentials.zipcode}
            onChange={this.handleChange}
            placeholder="zipcode"
          />
          <button>Login</button>
        </form>
      </div>
    );
  }
}

export default Register;
