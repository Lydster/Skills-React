import React from "react";
import { Route, NavLink } from "react-router-dom";
//import PrisonerList from "./PrisonerList";

//import { Card } from "../styledComps";
import { Card } from "react-materialize";
function Prison(props) {
  return (
    <div className="card-contain">
      <NavLink to={`/prisons/${props.prisons.id}`}>
        <div>
          <Card>
            <div className="item-title-wrapper">
              <h4>{props.prisons.location}</h4>
            </div>

            <nav className="item-sub-nav">
              <img
                src="http://www.wrexham.com/wp-content/uploads/2017/02/hmp-berwyn-wrexham-prison-800x380.jpg"
                width="300"
              />
            </nav>
          </Card>
        </div>
      </NavLink>
    </div>
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
