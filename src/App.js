import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import axios from "axios";

import PrisonList from "./components/PrisonList";
import PrisonerList from "./components/PrisonerList";

// Auth components
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

import Admin from "./components/Admin";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      prisons: [],
      prisoners: []
    };
  }

  addPrison = (e, prison) => {
    e.preventDefault();
    axios
      .post("https://damp-everglades-96876.herokuapp.com/api/prisons", prison)
      .then(res => {
        this.setState({
          prisons: [...res.data, prison]
        });
        this.props.history.push("/");
      })
      .catch(err => {
        console.log(err);
      });
  };

  loginUser = creds => {
    return axios
      .post("https://damp-everglades-96876.herokuapp.com/api/auth/login", creds)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  registerUser = creds => {
    return axios
      .post(
        "https://damp-everglades-96876.herokuapp.com/api/auth/register",
        creds
      )
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <>
        <div className="App">
          <nav>
            <div className="nav-links">
              <NavLink className="nav-a" exact to="/">
                Home
              </NavLink>
              <NavLink className="nav-a" to="/login">
                Login
              </NavLink>
              <NavLink className="nav-a" to="/register">
                Register
              </NavLink>
              <NavLink className="nav-a" to="/private">
                Institutions
              </NavLink>
            </div>
            <h1 className="main-header">Prison Employment Connection</h1>
          </nav>
          <Route
            exact
            path="/"
            render={props => (
              <PrisonList {...props} prisons={this.state.prisons} />
            )}
          />

          <Route
            path="/register"
            render={props => (
              <Register register={this.registerUser} {...props} />
            )}
          />

          <Route
            path="/login"
            render={props => <Login login={this.loginUser} {...props} />}
          />

          <Route
            path="/private"
            render={props => <Admin {...props} {...this.state} />}
          />

          <Route
            path="/prisons/:id"
            exact
            render={props => <PrisonerList {...props} />}
          />
        </div>
      </>
    );
  }
}

export default App;
