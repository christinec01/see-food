import React, { PropTypes } from 'react';
import Main from '../components/Main';

// Simple example of a React "smart" component
export default class SeeFoodApp extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (

      <div>

        <Main spots={this.props.spots} url={this.props.url} />
      </div>
    );
  }
}
