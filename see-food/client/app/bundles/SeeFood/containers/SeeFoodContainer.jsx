import React, { PropTypes }from 'react';
import NavBar from '../components/NavBar';
import Main from '../components/Main';

// Simple example of a React "smart" component
export default class SeeFoodApp extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (

      <div>

        <NavBar user={this.props.user}/>


        <Main spots={this.props.spots} url={this.props.url} map_key={this.props.map_key}/>
      </div>
    );
  }
}
