import React from "react";

import PrisonerList from "./PrisonList";
import PrisonerForm from "./PrisonerForm";
import PrisonPrisonerList from "./PrisonPrisonerList";

import axios from "axios";

class Admin extends React.Component {
  state = {
    prisoners: []
  };

  componentDidMount() {
    console.log(this.props);
    axios
      .get(
        `https://damp-everglades-96876.herokuapp.com/api/prisons/${
          this.props.prison
        }/prisoners`
      )
      .then(res => {
        this.setState({ prisoners: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  addPrisoner = prisoner => {
    axios
      .post(
        "https://damp-everglades-96876.herokuapp.com/api/prisoners",
        prisoner,
        {
          "Content-Type": "application/json",
          headers: { authorization: localStorage.getItem("token") }
        }
      )
      .then(res =>
        this.setState({
          prisoners: [this.state.prisoners, res.data]
        })
      )
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <>
        <PrisonerForm addPrisoner={this.addPrisoner} />
        <PrisonPrisonerList prisoners={this.state.prisoners} />
      </>
    );
  }
}

export default Admin;
