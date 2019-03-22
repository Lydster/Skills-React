import React from "react";
import Prison from "./Prison";
import Axios from "axios";

import {FlexDisplay} from '../styledComps'

class PrisonList extends React.Component {
	state = {
		prisons: []
	};

	componentDidMount() {
		Axios.get("https://damp-everglades-96876.herokuapp.com/api/prisons")
			.then(res => {
				this.setState({ prisons: [...res.data] });
			})
			.catch(err => {
				console.log(err);
			});
	}
	render() {
		return (
            <>
            <h1 className="main-header">Prison Employment Connection</h1>
            {/* <div className="prisonlistwrapper" style = {styles.displayFlex}> */}
            <FlexDisplay>
				{this.state.prisons.map(prison => (
                    <Prison prisons={prison} key={prison.id} />
                ))}
            </FlexDisplay>
            </>
		);
	}
}

export default PrisonList;
