import React from "react";

import Prisoner from "./Prisoner";

const PrisonPrisonerList = props => {
  return (
    <div>
      <h1>Prisoner List</h1>
      {props.prisoners.map(prisoner => {
        return (
          <Prisoner
            prisoners={prisoner}
            key={prisoner.id}
            deletePrisoner={props.deletePrisoner}
          />
        );
      })}
    </div>
  );
};

export default PrisonPrisonerList;
