import React from "react";
import PrisonList from "./PrisonList";
//import {Input, Button} from '../styledComps'
import { Input, Button } from "react-materialize";

class PrisonForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      prison: {
        id: "",
        location: "",
        population: "",
        zipcode: ""
      }
    };
  }

  changeHandler = e => {
    e.persist();
    this.setState(prevState => ({
      ...prevState.prison,
      [e.target.name]: e.target.value
    }));
  };

  handleSubmit = e => {
    this.props.addPrison(e, this.state.prison);
    this.setState({
      prison: {
        id: "",
        location: "",
        population: "",
        zipcode: ""
      }
    });
  };

  render() {
    return (
      <div>
        <h2>Add Your Institution</h2>
        <div className="add-container">
          <form onSubmit={this.handleSubmit}>
            <Input
              type="text"
              name="location"
              placeholder="location"
              value={this.state.location}
              onChange={this.changeHandler}
            />
            <Input
              type="text"
              name="population"
              placeholder="Population"
              value={this.state.population}
              onChange={this.changeHandler}
            />
            <Input
              type="text"
              name="zipcode"
              placeholder="Zipcode"
              value={this.state.zipcode}
              onChange={this.changeHandler}
            />
            <Button className="md-button" onClick={this.handleSubmit}>
              Add Prison
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default PrisonForm;
