import React from "react";
import Prison from "./Prison";
import Axios from "axios";

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
			<div className="prisonlist-wrapper">
				{console.log(this.state.prisons)}
				{this.state.prisons.map(prison => (
					<div>
						<Prison prisons={prison} key={prison.id} />
					</div>
				))}
			</div>
		);
	}
}

export default PrisonList;
