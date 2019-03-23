import React from "react";
import axios from "axios";
import Prisoner from "./Prisoner";

import { FlexDisplay } from "../styledComps";

class PrisonerList extends React.Component {
  state = {
    prisoners: []
  };

  componentDidMount() {
    axios
      .get(
        `https://pskills.herokuapp.com/api/prisons/${
          this.props.match.params.id
        }/prisoners`
      )
      .then(res => {
        this.setState({ prisoners: res.data });
      })

      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="prisoner-wrapper">
        {console.log(this.state)}
        <h2>Prisoner List</h2>
        <FlexDisplay>
          {this.state.prisoners.map(prisoner => (
            <div>
              <Prisoner prisoners={prisoner} key={prisoner.id_number} />
            </div>
          ))}
        </FlexDisplay>
      </div>
    );
  }
}

export default PrisonerList;
