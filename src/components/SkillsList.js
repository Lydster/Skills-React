import React from "react";
import Skill from "./Skill";

class SkillsList extends React.Component {
  render() {
    return (
      <div>
        {this.props.skills.map(skill => {
          return (
            <Skill
              {...skill}
              handleDeleteSkill={this.props.handleDeleteSkill}
            />
          );
        })}
        {console.log(this.props)}
      </div>
    );
  }
}

export default SkillsList;
