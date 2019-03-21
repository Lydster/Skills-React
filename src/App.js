import React, { Component } from 'react';
import {Route, NavLink} from 'react-router-dom';
import axios from 'axios';


import PrisonList from './components/PrisonList'
import Login from './components/Login'
import PrisonForm from './components/PrisonForm'
import Admin from './components/Admin';

import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      prisons: []
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/prisons')
      // .then(res => {
      //   console.log(res.data)
      // })
      .then(res => this.setState({ prisons: [...res.data]}))
      .catch(err => console.log(err));
  }

  addPrison = (e, prison) => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/', prison)
      .then(res => {
        this.setState({
          prisons: [...res.data, prison]
       }) 
       this.props.history.push("/")
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <>
      <div className="App">
        <nav>
          <div className="nav-links">
            <NavLink className='nav-a' exact to="/">Home</NavLink>
            <NavLink className='nav-a' to="/login">Login</NavLink>
            <NavLink className='nav-a' to="/private">Institutions</NavLink>

          </div>
          <h1 className="main-header">Prison Employment Connection</h1>
        </nav>
      <Route exact path="/" 
        render={props => (<PrisonList {...props} prisons={this.state.prisons}/>)}
      />

      <Route path="/login"
          render={props => <Login {...props}  />}
        />

      <Route path="/private"
          render={props => <Admin {...props} prisons={this.state.prisons} /> }
      />
      
      </div>
      </>
    );
  }
}

export default App;
