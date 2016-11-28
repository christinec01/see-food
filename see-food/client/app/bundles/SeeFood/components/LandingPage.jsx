import React, { PropTypes } from 'react';
import Registration from '../components/Registration';

// Simple example of a React "dumb" component
export default class LandingPage extends React.Component {
  // React will automatically provide us with the event `e`
  constructor() {
    super();
    this.state = {
      showRegistrationForm: false,
    }
  }
  handleChange(e) {
    const name = e.target.value;
    this.props.updateName(name);
  }
  handleRegistrationClick = (e) => {
    this.setState({showRegistrationForm: true});
  }
  render() {
    return (
      <div className="overlay">
        <Form
          showRegistrationForm={this.state.showRegistrationForm}
          handleRegistrationClick={this.handleRegistrationClick}
        />

      </div>
    );
  }
}

class Form extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="modal-content zip-modal">
          <div className="modal-body">
            <h1>See Food</h1>
            <form action="/landings" method="POST">
              <input type="text" name="zip" placeholder="Enter zip code" />
              <input type="submit" value="Submit" />
            </form>
            <div className="modal-footer">
              <input onClick={this.props.handleRegistrationClick} type="submit" value="Register" className="landing-buttons" />{this.props.showRegistrationForm ? <Registration /> : null}
              <input type="submit" value="Login" className="landing-buttons" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
