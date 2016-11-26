// Main is an arbitrary name for any "dumb" component. We do not recommend suffixing
// all your dumb component names with Widget.

import React, { PropTypes } from 'react';

// Simple example of a React "dumb" component
export default class Main extends React.Component {
  // React will automatically provide us with the event `e`
  handleChange(e) {
    const name = e.target.value;
    this.props.updateName(name);
  }

  render() {
    console.log(this.props.url)
    return (
      <div className="container">
        {this.props.spots.map((spot, i) => (
          <div>{spot.name}
          <img src={this.props.url[i]} alt=""/>
          {/* <img src={spot.photos[0].fetch_url(800)} alt=""/> */}
          {/* <img src={"https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=" + spot.photos.photo_reference} alt=""/> */}
          {/* <img src={spot.icon} alt=""/> */}
          {/* <img src="https://lh6.googleusercontent.com/-L13PKlmOiS4/V73Ev-ldNEI/AAAAAAAAAEA/d8L8z9qSXwkuX4KliyJ9HzgZthHiO8MCQCJkC/w310-h336-p-k-no/" alt=""/> */}
          </div>
        ))}
      </div>
    );
  }
}
