import React from "react";

import { Route, Link } from "react-router-dom";
import PrisonerList from "./PrisonerList";
import faker from "faker";
import { Card } from "../styledComps";


//import { Card } from "../styledComps";
import { Card } from "react-materialize";
function Prison(props) {
  return (

    <Link to={`/prisons/${props.prisons.id}`}>
      <Card>
        <div className="prison-header">
          <div className="item-title-wrapper prison-card">
            <h4>{props.prisons.location}</h4>
            <img src={`${faker.image.imageUrl()}?t=${Date.now()}`} />
          </div>
        </div>
        <nav className="item-sub-nav">Learn More</nav>
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
