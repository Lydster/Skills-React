import React from "react";

import { Route, Link } from "react-router-dom";
import PrisonerList from "./PrisonerList";
import faker from "faker";

import { Card } from "react-materialize";
function Prison(props) {
  return (
    <Link to={`/prisons/${props.prisons.id}`}>
      <Card>
        <div className="prison-header">
          <h4 className="card-title">{props.prisons.location}</h4>
          <img
            className="materialboxed"
            src={`${faker.image.imageUrl()}?t=${Date.now()}`}
            width="100%"
          />
        </div>
        <button className="card-button waves-effect materialboxed btn-large grey darken-2">
          Learn More
        </button>
      </Card>
    </Link>
  );
}

export default Prison;

// function Prison(props) {
//   return (
//     <div className="card-contain">
//       <Card>
//         <div className="item-title-wrapper">
//           <h4>{props.prisons.location}</h4>
//         </div>

//         <nav className="item-sub-nav">
//           <NavLink to={`/prisons/${props.prisons.id}`}>Learn More</NavLink>
//         </nav>
//       </Card>
//     </div>
//   );
// }

// export default Prison;
