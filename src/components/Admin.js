import React from "react";

import PrisonerForm from "./PrisonerForm";
import PrisonPrisonerList from "./PrisonPrisonerList";

import axios from "axios";

class Admin extends React.Component {
  state = {
    prisoners: []
  };

  componentDidMount() {
    axios
      .get(`http://localhost:5000/api/prisons/${this.props.prison}/prisoners`)
      .then(res => {
        this.setState({ prisoners: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  addPrisoner = prisoner => {
    axios
      .post("http://localhost:5000/api/prisoners", prisoner, {
        "Content-Type": "application/json",
        headers: { authorization: localStorage.getItem("token") }
      })
      .then(res =>
        this.setState({
          prisoners: [...this.state.prisoners, res.data]
        })
      )
      .catch(err => {
        console.log(err);
      });
  };

  deletePrisoner = prisonerId => {
    axios
      .delete(`http://localhost:5000/api/prisoners/${prisonerId}`, {
        "Content-Type": "application/json",
        headers: { authorization: localStorage.getItem("token") }
      })

      .then(res => {
        const filtered = this.state.prisoners.filter(
          prisoner => prisoner.id !== prisonerId
        );
        this.setState({
          prisoners: filtered
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <>
        <PrisonerForm addPrisoner={this.addPrisoner} />
        <PrisonPrisonerList
          prisoners={this.state.prisoners}
          deletePrisoner={this.deletePrisoner}
        />
      </>
    );
  }
}

export default Admin;
