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
        `http://localhost:5000/api/prisons/${
          this.props.match.params.id
        }/prisoners`
      )

      .then(res => {
        console.log(res.data);
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
        <FlexDisplay>
          {this.state.prisoners.map(prisoner => (
            <div>
              <Prisoner prisoners={prisoner} key={prisoner.id} />
            </div>
          ))}
        </FlexDisplay>
      </div>
    );
  }
}

export default PrisonerList;
