import React, { PropTypes } from 'react';
import _ from 'lodash';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

export default class RestaurantsModal extends React.Component {
  // showRestaurant(event) {
  //   const spot = {
  //     first_name: this.first_name.value,
  //     last_name: this.last_name.value,
  //     username: this.username.value,
  //     email: this.email.value,
  //     password: this.password.value,
  //   }
  //   this.props.addUser(user);
  //   this.restaurantTable.reset();
  // }
  render() {
    let {spot, handleClose, open} = this.props;

    const actions = [
        <FlatButton
          label="Cancel"
          primary={true}
          onTouchTap={handleClose}
        />,
        <FlatButton
          label="Submit"
          primary={true}
          keyboardFocused={true}
          onTouchTap={handleClose}
        />,
      ];

      return (
          <Dialog
            title={spot && spot.name}
            actions={actions}
            modal={false}
            open={open}
            onRequestClose={handleClose}
          >
            {spot ?
              <div>
                <p>{spot.name}</p>
                <p>{spot.location.display_address[0] + " " + spot.location.display_address[1]}</p>
                <p>{spot.phone}</p>
                <img src={spot.url} alt=""/>
              </div>
              : null}

          </Dialog>
      );
  }
}