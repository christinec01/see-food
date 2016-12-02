import React, { PropTypes } from 'react';

export default class Registration extends React.Component {
  createUser(event) {
    const user = {
      first_name: this.first_name.value,
      last_name: this.last_name.value,
      username: this.username.value,
      email: this.email.value,
      password: this.password.value,
      zip_code: this.zip_code.value,
    }
    this.props.addUser(user);
    this.registrationForm.reset();
  }
  handleChange(e) {
    const name = e.target.value;
    this.props.updateName(name);
  }

  render() {
    return (
      <form action="/users" method="POST" className="form-group form-validations login-register-form">
        <input type="text" name="user[first_name]" placeholder="First Name" className="form-control"/>
        <input type="text" name="user[last_name]" placeholder="Last Name" className="form-control"/>
        <input type="text" name="user[username]" placeholder="Username" className="form-control" />
        <input type="email" name="user[email]" placeholder="Email" className="form-control" />
        <input type="password" name="user[password]" placeholder="Password" className="form-control" />
        <input type="text" name="user[zip_code]" placeholder="Zip Code" className="form-control" />
        <input type="submit" value="Register" className="btn btn-primary login-register-form-button" />
      </form>
    );
  }
}