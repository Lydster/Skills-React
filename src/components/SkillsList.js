import React from "react";
import Skill from "./Skill";
import { Button } from "react-materialize";

class SkillsList extends React.Component {
  state = {
    skill: {
      name: "",
      prisoner_id: this.props.prisonerId
    }
  };

  addSkill = e => {
    e.preventDefault();
    console.log(this.state.skill)
    this.props.handleAddSkill(this.state.skill);
    this.setState({
      ...this.state.skill,
      name: ""
    });
  };

  changeHandler = e => {
    e.persist();
    this.setState({
      skill: { ...this.state.skill, [e.target.name]: e.target.value }
    });
  };

  render() {
    return (
      <div>
        {this.props.skills.map(skill => {
          return (
            <Skill
              {...skill}
              handleDeleteSkill={this.props.handleDeleteSkill}
              key={this.props.prisonerId}
              id={this.props.prisonerId}
            />
          );
        })}
        <form onSubmit={this.addSkill}>
          <input
            value={this.state.skill.name}
            placeholder="add skill"
            onChange={this.changeHandler}
            name="name"
          />
          <Button>Add</Button>
        </form>
      </div>
    );
  }
}

export default SkillsList;
