import React from "react";

import { Button } from "react-materialize";

//import { Card, Input } from "../styledComps";
import { Card, Input, Icon, Col } from "react-materialize";
class Prisoner extends React.Component {
  state = {
    isEditing: false,
    prisoner: {
      name: this.props.prisoners.name,
      id_number: this.props.prisoners.id_number,
      skills: null
    }
  };

  edit = () => {
    this.setState({
      isEditing: !this.state.isEditing
    });
  };

  changeHandler = e => {
    e.persist();
    this.setState({
      prisoner: { ...this.state.prisoner, [e.target.name]: e.target.value }
    });
  };

  deletePrisoner = e => {
    e.preventDefault();
    this.props.deletePrisoner(this.props.prisoners.id);
  };

  updatePrisoner = e => {
    e.preventDefault();
    this.props.updatePrisoner(this.props.prisoners.id, this.state.prisoner);
    this.setState({
      isEditing: !this.state.isEditing
    });
  };

  //   <Col m={6} s={12}>
  //   <Card className='blue-grey darken-1' textClassName='white-text' title='Card title' actions={[<a href='#'>This is a link</a>]}>
  //   I am a very simple card.
  //   </Card>
  // </Col>

  //   <Card className='small'
  //   header={<CardTitle image='img/sample-1.jpg'>Card Title</CardTitle>}
  //   actions={[<a href='#'>This is a Link</a>]}>
  //   I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
  // </Card>

  render() {
    console.log(this.props);
    return (
      <div className="prisoner-cards">
        <div className="prisoner-card">
          <Card className="blue-grey darken-1">
            {!this.state.isEditing ? (
              <div className="prisoner-text">
                <h3>{this.state.prisoner.name}</h3>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgyX2YvrpAXbXLAkffPL_0t9P_U8JbtTc5OU6lEINTkhSPnFXW" />
                <p>skills: skill</p>
                {this.props.match.url === "/private" ? (
                  <span>
                    <Button onClick={this.deletePrisoner}>Delete</Button>
                    <Button onClick={this.edit}>
                      Edit<Icon>create</Icon>
                    </Button>
                  </span>
                ) : null}
              </div>
            ) : (
              <div className="prisoner-text">
                <h2>Edit a Prisoner</h2>
                <form onSubmit={this.updatePrisoner}>
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
                  <Button>update</Button>
                  <Button onClick={this.edit}>cancel</Button>
                </form>
              </div>
            )}
          </Card>
        </div>
      </div>
    );
  }
}

export default Prisoner;
