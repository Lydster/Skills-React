import React from "react";
import { Route, NavLink } from "react-router-dom";
import faker from "faker";
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
              {/* <img
                src="http://www.wrexham.com/wp-content/uploads/2017/02/hmp-berwyn-wrexham-prison-800x380.jpg"
                width="300"
              /> */}
              <img
                src={`${faker.image.imageUrl()}?t=${Date.now()}`}
                width="100%"
              />
            </nav>
          </Card>
        </div>
      </NavLink>
    </div>
  );
}

export default Prison;

// import faker from "faker";

// import { Card } from "react-materialize";
// function Prison(props) {
//   return (
//     <Link to={`/prisons/${props.prisons.id}`}>
//       <Card>
//         <div className="prison-header">
//           <h4 className="card-title">{props.prisons.location}</h4>
//           <img
//             className="materialboxed"
//             src={`${faker.image.imageUrl()}?t=${Date.now()}`}
//             width="100%"
//           />
//         </div>
//         <button className="card-button waves-effect materialboxed btn-large grey darken-2">
//           Learn More
//         </button>
//       </Card>
//     </Link>
//   );
// }

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
