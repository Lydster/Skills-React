import React from "react";
import axios from "axios";
import Prisoner from "./Prisoner";

class PrisonerList extends React.Component {
	state = {
		prisoners: []
	};

	componentDidMount() {
		axios
			.get(
				`https://damp-everglades-96876.herokuapp.com/api/prisons/${
					this.props.match.params.id
				}/prisoners`
			)
			.then(res => {
				this.setState({ prisoners: res.data });
			})

			.catch(err => {
				console.log(err);
			});
	}

	render() {
		return (
			<div className="prisoner-wrapper">
				{console.log(this.state)}
				<h2>Prisoner List</h2>
				{this.state.prisoners.map(prisoner => (
					<div>
						<Prisoner
							prisoners={prisoner}
							key={prisoner.id_number}
						/>
					</div>
				))}
			</div>
		);
	}
}

export default PrisonerList;
