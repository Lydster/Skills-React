import React from "react";
import { Route, Link } from "react-router-dom";
import PrisonerList from "./PrisonerList";
import faker from "faker";
import { Card } from "../styledComps";

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
