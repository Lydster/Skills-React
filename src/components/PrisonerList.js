import React from "react";

import Prisoner from "./Prisoner";

const PrisonerList = props => {
	return (
		<div className="prisonlist-wrapper">
			{console.log(props)}
			{props.prisoners.map(prisoner => (
				<div>
					<Prisoner {...props} key={prisoner.prison_id} />
				</div>
			))}
		</div>
	);
};

export default PrisonerList;
