// import React from 'react';

// const Prison = (props) => {
//     return (
//         <div>
//             <h3>{props.prison.name}</h3>
//             <h6>{props.prison.location}</h6>
//         </div>
//     )
// }
// export default Prison;


import React from 'react';
import { Route, NavLink } from 'react-router-dom';


function Prison(props) {
//   const prison = props.prison.find(
//     thing => `${thing.id}` === props.match.params.id
//   );

//   if (!props.prisons.length || !prison) {
//     return <h2>Loading institution data...</h2>;
//   }

  return (
    <div className="prison-wrapper">
      <div className="prison-header">
        <div className="item-title-wrapper">
          <h4>{props.prison.location}</h4>
        </div>
      </div>
      <nav className="item-sub-nav">
        <NavLink to={`/:${props.prison.id}`}>
          Learn More
        </NavLink>
        
     

      </nav>
   </div>
  );
}


export default Prison;
