import React from "react";


class PrisonForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
                id: '',
                location: '',
                population: '',
                zipcode: ''
        }
    }

    changeHandler = e => {
        e.persist();
        this.setState(prevState => ({
            
            ...prevState.obj,
            [e.target.name]: e.target.value
        
        }))
    }

    handleSubmit = e => {
        this.props.addPrison(e, this.state.obj);
        this.setState({
                id: '',
                location: '',
                population: '',
                zipcode: ''
            
        })
    }


    render() {
        return (
          <div>
            <h2>Add Your Institution</h2>
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                name="location"
                placeholder="location"
                value={this.state.location}
                onChange={this.changeHandler}
              />
              <input
                type="text"
                name="population"
                placeholder="Population"
                value={this.state.population}
                onChange={this.changeHandler}
              />
              <input
                type="text"
                name="zipcode"
                placeholder="Zipcode"
                value={this.state.zipcode}
                onChange={this.changeHandler}
              />
              <button className="md-button" onClick={this.handleSubmit}>
                Add Prison
              </button>
            </form>
          </div>
        );
      }
    }
 
    export default PrisonForm