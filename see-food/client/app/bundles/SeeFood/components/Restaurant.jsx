import React, { PropTypes } from 'react';

export default class Restaurant extends React.Component {
  handleChange(e) {
    const name = e.target.value;
    this.props.updateName(name);
  }

  render() {
    return (
      <div className="container">
        <RestaurantTable />
      </div>
    );
  }
}

class RestaurantTable extends React.Component {
  showRestaurant(event) {
    const spot = {
      first_name: this.first_name.value,
      last_name: this.last_name.value,
      username: this.username.value,
      email: this.email.value,
      password: this.password.value,
    }
    this.props.addUser(user);
    this.restaurantTable.reset();
  }
  render() {
    return (
      <div className="container">
        <div className="modal-content zip-modal">
            <div className="modal-body">
              <p>Hello</p>
            </div>
        </div>
      </div>
    );
  }
}




