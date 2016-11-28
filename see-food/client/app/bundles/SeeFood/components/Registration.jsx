import React, { PropTypes } from 'react';

export default class Registration extends React.Component {
  handleChange(e) {
    const name = e.target.value;
    this.props.updateName(name);
  }

  render() {
    return (
      <div className="container">
        <RegistrationForm />
      </div>
    );
  }
}

class RegistrationForm extends React.Component {
  createUser(event) {
    const user = {
      first_name: this.first_name.value, 
      last_name: this.last_name.value,
      username: this.username.value, 
      email: this.email.value, 
      password: this.password.value,
    }
    this.props.addUser(user);
    this.registrationForm.reset();
  }
  render() {
    return (
      <div className="container">
        <div className="modal-content">
          <div className="modal-body">
            <h1>Register</h1>
              <form ref={(input) => this.first_name = input} type="text" placeholder="FirstName" className="first_name" onSubmit={(e) => this.createUser(e)}>
                <input ref={(input) => this.last_name = input} type="text" placeholder="Last Name"/>
                <input ref={(input) => this.username = input}type="text" placeholder="Username"/>
                <input ref={(input) => this.email = input}type="email" placeholder="Email"/>
                <input ref={(input) => this.password = input}type="password" placeholder="Password"/>
                <button type="submit"> Register </button>
              </form>
          </div>
        </div>
      </div>
    );
  }
}




