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
          <div className="container">
          <button type="button" className="btn btn-warning">NO THANKS</button>
          <button type="button" className="btn btn-danger">LIKE</button>
          <img className="index-pic" src={this.props.url[i]} alt=""/>

          </div>
        ))}
      </div>
    );
  }
}
