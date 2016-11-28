// Main is an arbitrary name for any "dumb" component. We do not recommend suffixing
// all your dumb component names with Widget.

import React, { PropTypes } from 'react';

// Simple example of a React "dumb" component
export default class Main extends React.Component {
  // React will automatically provide us with the event `e`
  constructor() {
    super();
    this.state = {
      currentRestaurantIndex: 0,
      likedSpots: [],
      showLikes: false,
    };
  }
  handleChange(e) {
    const name = e.target.value;
    this.props.updateName(name);
  }
  handleRating = (e) => {
    // save restaurant that was clicked to db
    console.log(e.target.dataset.label)
    if (e.target.dataset.label === 'like') {
      // make ajax request
      let spotToSave = this.props.spots[this.state.currentRestaurantIndex];
      this.setState({
        likedSpots: this.state.likedSpots.concat(spotToSave),
      });
    }
    // console.log('click', this.props.spots.length);
    this.nextSlide();
  }
  toggleLikes = () => {
    this.setState({
      showLikes: !this.state.showLikes,
    });
  }
  nextSlide = () => {
    if (this.state.currentRestaurantIndex === this.props.spots.length) {
      console.log("here in the method")
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
    console.log(this.state.currentRestaurantIndex)
    let {currentRestaurantIndex} = this.state;
    let {spots} = this.props;
    let spot = spots[currentRestaurantIndex];
    return (
      <div className="container">
          <div className="row" style={{marginTop: '20%'}}>
            <div className="col-sm-2">
              <button
                style={{cursor: 'pointer', zIndex: 99, marginTop: '200 auto'}}
                type="button"
                className="btn btn-lg btn-warning no-thanks"
                data-label="dislike"
                onClick={this.handleRating}>
                NO THANKS
              </button>
            </div>
            <div className="col-sm-6">
              <img className="index-pic" src={spot.url} alt=""/>
            </div>
            <div className="col-sm-2">
              <button
                style={{cursor: 'pointer', zIndex: 99, marginTop: '200 auto'}}
                type="button"
                data-label="like"
                className="btn btn-lg btn-danger like"
                onClick={this.handleRating}>
                LIKE
              </button>
            </div>
            <div className="col-sm-2">
            <button onClick={this.toggleLikes}>{this.state.showLikes ? 'Hide my likes' : 'Show my likes'}</button>
              {this.state.showLikes ?
                <ul>
                  {this.state.likedSpots.map((spot) => (
                    <li> {spot.name} </li>
                  ))}
                </ul> : null
              }

            </div>
          </div>
      </div>
    );
  }
}
