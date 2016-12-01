// Main is an arbitrary name for any "dumb" component. We do not recommend suffixing
// all your dumb component names with Widget.

import React, { PropTypes } from 'react';
import RestaurantsModal from './RestaurantsModal';
// Simple example of a React "dumb" component
export default class Main extends React.Component {
  // React will automatically provide us with the event `e`
  constructor() {
    super();
    this.state = {
      currentRestaurantIndex: 0,
      likedSpots: [],
      showLikes: false,
      showRestaurantsModal: false,
      restaurantIndex: 0,
      spots: this.props,
      sendEmail: false,
      enterEmail: '',
    };
  }

  handleClick = (e) => {
    this.setState({showRestaurantsModal: true});
  }

  showRestaurantsModal = (e) => {
    this.setState({
      showRestaurantsModal: true,
      restaurantIndex: e.target.dataset.index
    })
  }

  hideRestaurantsModal = () => {
    this.setState({
      showRestaurantsModal: false,
    })
  }

  handleRating = (e) => {
    // save restaurant that was clicked to db


    if (e.target.dataset.label === 'like') {
      // make ajax request
      fetch('/restaurants', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: e.target.dataset.name,
          address: e.target.dataset.address,
          phone_number: e.target.dataset.phone,
          picture_url: e.target.dataset.picurl,
        }),
      });
      let spotToSave = this.props.spots[this.state.currentRestaurantIndex];

      this.setState({
        likedSpots: this.state.likedSpots.concat(spotToSave),
      });
    }
    else if (e.target.dataset.label === 'dislike') {
      let spotToRemove = this.props.spots[this.state.currentRestaurantIndex];

      this.setState({
        spots: this.props.spots.splice([this.state.currentRestaurantIndex], 1),
      });
    }
    // console.log('click', this.props.spots.length);
    this.nextSlide();
  }
  // sendEmail() {
  //   const email = {
  //     email: this.email.value,
  //   };
  // }
  handleEmailChange = (e) => {
    const name = e.target.value;
    console.log(name)
    this.setState({
      enterEmail: name,
    });
  }

// }
  handleChange = (e) => {
    if (e.target.dataset.email) {
      fetch('/sendEmail', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          enterEmail: e.target.nextElementSibling.name,
          // enterEmail: e.target.dataset.name,
          likedSpots: this.state.likedSpots,
        }),
      }
);
    }
  }
  toggleLikes = () => {
    this.setState({
      showLikes: !this.state.showLikes,
    });
  }
  nextSlide = () => {
    if (this.state.currentRestaurantIndex === this.props.spots.length) {
      // console.log("here in the method")
      this.setState({
        currentRestaurantIndex: 0,
      });
    } else {
      this.setState({
        currentRestaurantIndex: this.state.currentRestaurantIndex + 1,
      });
    }
  }
  render() {
    // this.state.currentRestaurantIndex
    // console.log(this.state.currentRestaurantIndex)
    let {currentRestaurantIndex} = this.state;
    let {spots} = this.props;
    let spot = spots[currentRestaurantIndex];
    return (
      
      <div className="container">
          <div className="row" style={{marginTop: '20%'}}>
            <div className="col-sm-2">
              <button
                style={{marginTop: '200 auto'}}
                type="button"
                className="btn btn-lg btn-warning no-thanks pic-button"
                data-label="dislike"
                onClick={this.handleRating}>
                NO THANKS
              </button>
            </div>
            <div className="col-sm-4">
              <img className="index-pic" src={spot.url} alt=""/>
            </div>
            <div className="col-sm-2">
              <button
                style={{cursor: 'pointer', zIndex: 99, marginTop: '200 auto'}}
                type="button"
                data-label="like"
                data-name={spot.name}
                data-address={spot.location.display_address[0] + " " + spot.location.display_address[1]}
                data-phone={spot.phone}
                data-picurl={spot.url}
                className="btn btn-lg btn-danger like pic-button"
                onClick={this.handleRating}>
                LIKE
              </button>
            </div>
          <div className="col-sm-2">
            <button
              onClick={this.toggleLikes}>{this.state.showLikes ? 'Hide my likes' : 'Show my likes'}
              </button>
              {this.state.showLikes ?
                <ul>
                    {this.state.likedSpots.map((spot, i) => (
                      <li onClick={this.showRestaurantsModal} data-index={i}>{spot.name}</li>
                      ))}
                </ul> : null
              }
              <div className="col-sm-2">
              <button
              style={{cursor: 'pointer', zIndex: 99, marginTop: '200 auto'}}
              data-email="email"
              data-name="enterEmail"
              className="btn btn-sm btn-warning"
              onClick={this.handleChange}>Send my likes to a friend!
              </button>
              <input type="text" onChange={this.handleEmailChange} name={this.state.enterEmail} />
              </div>
            </div>
          </div>
          <RestaurantsModal
            map_key={this.props.map_key}
            open={this.state.showRestaurantsModal}
            spot={this.state.likedSpots[this.state.restaurantIndex]}
            handleOpen={this.showRestaurantsModal}
            handleClose={this.hideRestaurantsModal}
          />
      </div>
    );
  }
}
