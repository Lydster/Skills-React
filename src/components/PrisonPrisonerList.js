import React from "react";

import Prisoner from "./Prisoner";

const PrisonPrisonerList = props => {
  return (
    <div className="prisoner-cards">
      {console.log(props)}
      {props.prisoners.map(prisoner => {
        return (
          <Prisoner
            prisoners={prisoner}
            key={prisoner.id}
            id={prisoner.id}
            deletePrisoner={props.deletePrisoner}
            updatePrisoner={props.updatePrisoner}
            match={props.match}
          />
        );
      })}
    </div>
  );
};

export default PrisonPrisonerList;
