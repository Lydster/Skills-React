import React from "react";
import PrisonList from "./PrisonList";
import { Input, Button } from "../styledComps";

class PrisonerForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      prisoner: {
        name: "",
        id_number: "",
        skills: ""
      }
    };
  }

  changeHandler = e => {
    e.persist();
    this.setState({
      prisoner: { ...this.state.prisoner, [e.target.name]: e.target.value }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addPrisoner(this.state.prisoner);
    this.setState({
      prisoner: {
        name: "",
        id_number: "",
        skills: ""
      }
    });
  };

  render() {
    return (
      <div>
        <h2>Add Your Prisoner</h2>
        <form onSubmit={this.handleSubmit}>
          <Input
            type="text"
            name="name"
            placeholder="name"
            value={this.state.prisoner.name}
            onChange={this.changeHandler}
          />
          <Input
            type="text"
            name="id_number"
            placeholder="id_number"
            value={this.state.prisoner.id_number}
            onChange={this.changeHandler}
          />
          <Input
            type="text"
            name="skills"
            placeholder="skills"
            value={this.state.prisoner.skills}
            onChange={this.changeHandler}
          />
          <Button className="md-button" onClick={this.handleSubmit}>
            Add Prisoner
          </Button>
        </form>
      </div>
    );
  }
}

export default PrisonerForm;
