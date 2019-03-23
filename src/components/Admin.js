import React from "react";

import PrisonerForm from "./PrisonerForm";
import PrisonPrisonerList from "./PrisonPrisonerList";

import axios from "axios";

class Admin extends React.Component {
  state = {
    prisoners: []
  };

  componentDidMount() {
    this.fetchCurrentPrisoners();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.prison !== this.props.prison)
      return this.fetchCurrentPrisoners();
  }

  fetchCurrentPrisoners = () => {
    axios
      .get(
        `https://pskills.herokuapp.com/api/prisons/${
          this.props.prison
        }/prisoners`
      )
      .then(res => {
        this.setState({ prisoners: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  addPrisoner = prisoner => {
    axios
      .post("https://pskills.herokuapp.com/api/prisoners", prisoner, {
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

  updatePrisoner = (id, updatedPrisoner) => {
    axios
      .put(
        `https://pskills.herokuapp.com/api/prisoners/${id}`,
        updatedPrisoner,
        {
          "Content-Type": "application/json",
          headers: { authorization: localStorage.getItem("token") }
        }
      )
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  };

  deletePrisoner = prisonerId => {
    axios
      .delete(`https://pskills.herokuapp.com/api/prisoners/${prisonerId}`, {
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
    console.log(this.props);
    return (
      <>
        <PrisonerForm
          addPrisoner={this.addPrisoner}
          prisons={this.props.prisons}
        />
        <PrisonPrisonerList
          match={this.props.match}
          prisoners={this.state.prisoners}
          deletePrisoner={this.deletePrisoner}
          updatePrisoner={this.updatePrisoner}
        />
      </>
    );
  }
}

export default Admin;
