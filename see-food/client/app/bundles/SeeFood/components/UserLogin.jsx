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
		// this.authenticity_toke
	}

	createSession = (event) => {
		const session = {
			email: this.email.value, 
			password: this.password.value,
		}
		
		// this.sessionForm.reset();
	}

	handleChange = (e) => {
		// this.setState(Object.assign(this.state, { formData: {email: e.target.value, password: e.target.value}}))
		// console.log(e.target.value)
		const formData = this.state.formData;
		formData[e.target.name] = e.target.value;
		this.setState({formData: formData });


	   //  handleChange: function (propertyName, event) {
    //   const contact = this.state.contact;
    //   contact[propertyName] = event.target.value;
    //   this.setState({contact: contact });

    }

	handleSubmit = (e) => {
		fetch('/login', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email: this.state.formData.email,
				password: this.state.formData.password
			})
		})
	}

	onBlur = (e) => {
		console.log(e.target.value)
		console.log("JUST CHANGED FORM FIELDS!")
	}

	render() {
		// console.log(this.state)

		return (
			<form className="session-edit" action="/login" method="POST">
				
				<input name="email" onBlur={this.onBlur} onChange={this.handleChange} type="email" placeholder="Email"/>
				<input name="password" onChange={this.handleChange} type="password" placeholder="Password"/>
				<button className="landing-buttons" type="submit"> Login </button>
			</form>
			)
	}
}

export default UserLogin;