import React from "react";
import { Route, NavLink } from "react-router-dom";
import PrisonerList from "./PrisonerList";

function Prison(props) {
	return (
		<div className="prison-wrapper">
			<div className="prison-header">
				<div className="item-title-wrapper">
					<h4>{props.prisons.location}</h4>
				</div>
			</div>
			<nav className="item-sub-nav">
				<NavLink to={`/prisons/${props.prisons.id}`}>
					Learn More
				</NavLink>
			</nav>
		</div>
	);
}

export default Prison;
