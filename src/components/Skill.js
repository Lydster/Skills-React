import React from "react";
import { Button, Icon, Input } from "react-materialize";
import Axios from "axios";

class Skill extends React.Component {
  state = {
    isEditing: false,
    prisoner: {
      name: this.props.name,
      prisoner_id: this.props.prisoner_id
    }
  };

  handleChanges = e => {
    e.persist();
    this.setState({
      prisoner: { ...this.state.prisoner, [e.target.name]: e.target.value }
    });
  };

  handleEdit = e => {
    e.preventDefault();
    this.setState({
      isEditing: !this.state.isEditing
    });
  };

  handleUpdate = e => {
    e.preventDefault();
    Axios.put(
      `https://pskills.herokuapp.com/api/skills/${this.props.id}`,
      this.state.prisoner
    );
    this.setState({ isEditing: !this.state.isEditing });
  };

  handleDelete = e => {
    e.preventDefault();
    this.props.handleDeleteSkill(this.props.id);
  };

  render() {
    console.log(this.props.id);
    return (
      <div>
        {!this.state.isEditing ? (
          <div>
            {this.state.prisoner.name}
            {this.props.match.url === "/private" && (
              <div>
                <span>
                  <Button onClick={this.handleEdit} waves="light">
                    Update
                    <Icon tiny left>
                      create
                    </Icon>
                  </Button>
                </span>
                <span>
                  <Button onClick={this.handleDelete} waves="light">
                    Delete
                    <Icon tiny left>
                      cancel
                    </Icon>
                  </Button>
                </span>
              </div>
            )}
          </div>
        ) : (
          <div>
            <form onSubmit={this.handleUpdate}>
              <Input
                name="name"
                value={this.state.prisoner.name}
                onChange={this.handleChanges}
              />
              <Button>Update</Button>
              <Button onClick={this.handleEdit}>cancel</Button>
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default Skill;
