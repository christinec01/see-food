import React, { PropTypes } from 'react';
import ReactOnRails from 'react-on-rails';

class UserLogin extends React.Component {
	constructor() {
		super();
		this.state = {
			formData: {
				email: '',
				password: ''
			},
			showModal: false,
		}
	}
	createSession = (event) => {
		const session = {
			email: this.email.value, 
			password: this.password.value,
		}
		
		this.sessionForm.reset();
	}
	handleChange = (e) => {
		this.setState({[e.target.name]: e.target.value})
		e.target.dataset.age
	}

	handleSubmit = (e) => {
		$.ajax({
			data: this.state.formData
		})
	}
	render() {
		return (
			<form onSubmit={this.handleSubmit} className="session-edit">
				<input name="email" onChange={this.handleChange} type="email" placeholder="Email"/>
				<input name="password" onChange={this.handleChange} type="password" placeholder="Password"/>
				<button className="landing-buttons" type="submit"> Login </button>
			</form>
		)
	}
}

export default UserLogin;