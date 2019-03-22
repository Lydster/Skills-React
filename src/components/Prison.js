import React from "react";
import { Route, NavLink } from "react-router-dom";
import PrisonerList from "./PrisonerList";

import {Card} from '../styledComps'

function Prison(props) {
	return (
		<Card>
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
    </Card>
	);
}

export default Prison;
