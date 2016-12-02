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
    let {spot, handleClose, open, map_key} = this.props;
    
    const actions = [
        <FlatButton
          label="X"
          primary={true}
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
                <div className="row" id="restaurant-info">
                  <div className="col-md-6" id="location-address">
                    <div className="single-space">
                      <p>{spot.location.display_address[0]}</p>
                      <p>{spot.location.display_address[1]}</p>
                    </div>
                      <p>{(spot.phone).replace((/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/), "($1) $2-$3")}</p>
                  </div>
                  <div className="col-md-6 pull-right">
                    <iframe width="350" height="150" frameBorder="0" src={"https://www.google.com/maps/embed/v1/place?key=" + map_key + "&q=" + encodeURI(spot.location.display_address[0]) + encodeURI(spot.location.display_address[1])}></iframe>
                  </div>
                </div>
                <img src={spot.url} alt=""/>
              </div>
              : null}

          </Dialog>
      );
  }
}
