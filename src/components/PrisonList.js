import React from "react";
import Prison from "./Prison";
import Axios from "axios";

import { FlexDisplay } from "../styledComps";

class PrisonList extends React.Component {
  state = {
    prisons: []
  };

  componentDidMount() {
    Axios.get("http://localhost:5000/api/prisons")
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
        <div className="card-contain">
          {this.state.prisons.map(prison => (
            <Prison prisons={prison} key={prison.id} />
          ))}
        </div>
      </>
    );
  }
}

export default PrisonList;
