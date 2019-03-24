import React from "react";
import SkillsList from "./SkillsList";
import { Button } from "react-materialize";

//import { Card, Input } from "../styledComps";
import { Card, Input, Icon, Col } from "react-materialize";
import Axios from "axios";
class Prisoner extends React.Component {
	state = {
		isEditing: false,
		prisoner: {
			name: this.props.prisoners.name,
			id_number: this.props.prisoners.id_number,
			skills: []
		}
	};

	componentWillMount() {
		Axios.get(`https://pskills.herokuapp.com/api/skills`)
			.then(res => {
				const filtered = res.data.filter(
					skill => skill.prisoner_id === this.props.prisoners.id
				);

				this.setState({
					prisoner: {
						...this.state.prisoner,
						skills: filtered
					}
				});
			})
			.catch(err => console.log(err));
	}

	edit = () => {
		this.setState({
			isEditing: !this.state.isEditing
		});
	};

	changeHandler = e => {
		e.persist();
		this.setState({
			prisoner: {
				...this.state.prisoner,
				[e.target.name]: e.target.value
			}
		});
	};

	deletePrisoner = e => {
		e.preventDefault();
		this.props.deletePrisoner(this.props.prisoners.id);
	};

	updatePrisoner = e => {
		e.preventDefault();
		this.props.updatePrisoner(this.props.prisoners.id, this.state.prisoner);
		this.setState({
			isEditing: !this.state.isEditing
		});
	};

	handleAddSkill = skill => {
		console.log(skill);
		Axios.post("https://pskills.herokuapp.com/api/skills", skill)
			.then(res =>
				this.setState({
					prisoner: {
						...this.state.prisoner,
						skills: [...this.state.prisoner.skills, res.data]
					}
				})
			)
			.catch(err => console.log(err));
	};

	handleDeleteSkill = id => {
		Axios.delete(`https://pskills.herokuapp.com/api/skills/${id}`)
			.then(res => {
				const filtered = this.state.prisoner.skills.filter(skill => {
					console.log(id);
					console.log(skill.id);
					return id !== skill.id;
				});
				this.setState({
					...this.state,
					prisoner: { ...this.state.prisoner, skills: filtered }
				});
			})
			.catch(err => console.log(err));
	};

	render() {
		console.log(this.state.prisoner.skills);
		return (
			<div className="prisoner-cards">
				<div className="prisoner-card">
					<Card className="blue-grey darken-1">
						{!this.state.isEditing ? (
							<div className="prisoner-text">
								<h3>{this.state.prisoner.name}</h3>
								<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgyX2YvrpAXbXLAkffPL_0t9P_U8JbtTc5OU6lEINTkhSPnFXW" />

								<SkillsList
									skills={this.state.prisoner.skills}
									handleDeleteSkill={this.handleDeleteSkill}
									prisonerId={this.props.prisoners.prison_id}
									handleAddSkill={this.handleAddSkill}
								/>

								{this.props.match.url === "/private" ? (
									<span>
										<Button onClick={this.deletePrisoner}>
											Delete
										</Button>
										<Button onClick={this.edit}>
											Edit<Icon>create</Icon>
										</Button>
									</span>
								) : null}
							</div>
						) : (
							<div className="prisoner-text">
								<h2>Edit a Prisoner</h2>
								<form onSubmit={this.updatePrisoner}>
									<Input
										type="text"
										name="name"
										placeholder="name"
										value={this.state.prisoner.name}
										onChange={this.changeHandler}
									/>
									<Input
										type="text"
										name="id_number"
										placeholder="id_number"
										value={this.state.prisoner.id_number}
										onChange={this.changeHandler}
									/>

									<Button>update</Button>
									<Button onClick={this.edit}>cancel</Button>
								</form>
							</div>
						)}
					</Card>
				</div>
			</div>
		);
	}
}

export default Prisoner;
