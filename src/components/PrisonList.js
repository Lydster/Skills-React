import React from "react";
import Prison from "./Prison";
import Axios from "axios";
import { FlexDisplay } from "../styledComps";

import PrisonForm from "./PrisonForm";

class PrisonList extends React.Component {
  state = {
    prisons: []
  };

  componentDidMount() {
    Axios.get("https://pskills.herokuapp.com/api/prisons")

      .then(res => {
        this.setState({ prisons: [...res.data] });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <>
        <div className="prisonList">
          {this.state.prisons.map(prison => (
            <Prison prisons={prison} key={prison.id} />
          ))}
        </div>
      </>
    );
  }
}

export default PrisonList;
