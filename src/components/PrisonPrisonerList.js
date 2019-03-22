import React from "react";

import Prisoner from "./Prisoner";

const PrisonPrisonerList = props => {
  return (
    <div>
      {console.log(props)}
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
