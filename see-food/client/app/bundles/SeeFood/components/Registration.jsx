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
      <form action="/users" method="POST">
        <input type="text" name="user[first_name]" placeholder="First Name" />
        <input type="text" name="user[last_name]" placeholder="Last Name" />
        <input type="text" name="user[username]" placeholder="Username" />
        <input type="email" name="user[email]" placeholder="Email" />
        <input type="password" name="user[password]" placeholder="Password" />
        <input type="text" name="user[zip_code]" placeholder="Zip Code" />
        <input type="submit" value="Register" />
      </form>
    );
  }
}



