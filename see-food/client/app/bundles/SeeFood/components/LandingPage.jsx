import React, { PropTypes } from 'react';

// Simple example of a React "dumb" component
export default class LandingPage extends React.Component {
  // React will automatically provide us with the event `e`
  handleChange(e) {
    const name = e.target.value;
    this.props.updateName(name);
  }

  render() {
    return (
      <Form />
    );
  }
}

class Form extends React.Component {
  render() {
    return (
      <form action="/landings" method="POST">
        <label>
        Zip:
        <input type="text" name="zip" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
