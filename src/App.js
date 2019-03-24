import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import axios from "axios";
import PrisonList from "./components/PrisonList";
import PrisonerList from "./components/PrisonerList";
import Contact from "./components/contact/ContactContainer";

// Auth components
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import PrivateRoute from "./components/auth/PrivateRoute";

import Admin from "./components/Admin";

import "./App.css";

class App extends Component {
  loginUser = creds => {
    return axios
      .post("https://pskills.herokuapp.com/api/auth/login", creds)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        this.props.history.push("/private");
      })
      .catch(err => {
        console.log(err);
      });
  };

  registerUser = creds => {
    console.log(creds);
    return axios
      .post("https://pskills.herokuapp.com/api/auth/register", creds)
      .then(res => {
        console.log(res.data);
        //localStorage.setItem("token", res.data.token);
      })
      .catch(err => {
        console.log(err);
      });
  };

  logOut = () => {
    localStorage.removeItem("token");
  };

  render() {
    return (
      <>
        <div className="App">
          <nav>
            <div className="nav-links">
              <span>
                <NavLink className="nav-a" exact to="/">
                  Home
                </NavLink>
                {localStorage.getItem("token") ? (
                  <NavLink className="nav-a" to="/" onClick={this.logOut}>
                    Logout
                  </NavLink>
                ) : (
                  <span>
                    <NavLink className="nav-a" to="/login">
                      Login
                    </NavLink>
                    <NavLink className="nav-a" to="/register">
                      Register
                    </NavLink>
                  </span>
                )}
                <NavLink className="nav-a" to="/private">
                  Institution
                </NavLink>
                <NavLink className="nav-a" to="/contact">
                  Contact
                </NavLink>
              </span>
            </div>
            <h1 className="main-header" />
          </nav>
          <Route exact path="/" render={props => <PrisonList {...props} />} />

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

          <PrivateRoute
            path="/private"
            render={props => <Admin {...props} {...this.state} />}
          />

          <Route
            path="/prisons/:id"
            exact
            render={props => <PrisonerList {...props} />}
          />

          <Route
            path="/contact"
            exact
            render={props => <Contact {...props} {...this.state} />}
          />
        </div>
      </>
    );
  }
}

export default App;
