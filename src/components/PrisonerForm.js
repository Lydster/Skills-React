import React from "react";
import PrisonList from "./PrisonList";
//import { Input, Button } from "../styledComps";
import { Input, Button } from "react-materialize";

class PrisonerForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      prisoner: {
        name: "",
        id_number: "",
        skills: { name: "" }
      },
      prisons: this.props.prisons
    };
  }

  changeHandler = e => {
    e.persist();
    this.setState({
      prisoner: { ...this.state.prisoner, [e.target.name]: e.target.value }
    });
  };

  skillsHandler = e => {
    e.persist();
    this.setState({
      prisoner: {
        ...this.state.prisoner,
        skills: {
          ...this.state.prisoner.skills,
          [e.target.name]: e.target.value
        }
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addPrisoner(this.state.prisoner);
    this.setState({
      prisoner: {
        name: "",
        id_number: "",
        skills: { name: "" }
      }
    });
  };

  render() {
    console.log(this.state.prisoner.skills.name);
    console.log(this.state);
    return (
      <div className="add-container">
        <h2>Add a Prisoner</h2>
        <form onSubmit={this.handleSubmit}>
          <Input
            type="text"
            name="name"
            placeholder="name"
            value={this.state.prisoner.name}
            onChange={this.changeHandler}
          />
          <Input
            type="select"
            name="id_number"
            placeholder="id_number"
            value={this.state.prisoner.id_number}
            onChange={this.changeHandler}
          />
          <Input
            type="text"
            name="name"
            placeholder="skills"
            value={this.state.prisoner.skills.name}
            onChange={this.skillsHandler}
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
