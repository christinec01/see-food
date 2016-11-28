import React, { PropTypes } from 'react';
import Registration from '../components/Registration';
import UserLogin from './UserLogin';


// Simple example of a React "dumb" component
export default class LandingPage extends React.Component {
  // React will automatically provide us with the event `e`
  constructor() {
    super();
    this.state = {
      showRegistrationForm: false,
      showUserLoginForm: false,
    }
  }
  handleChange(e) {
    const name = e.target.value;
    this.props.updateName(name);
  }

  handleRegistrationClick = (e) => {
    this.setState({showRegistrationForm: true});
  }

  handleClick = (e) => {
    this.setState({showUserLoginForm: true});
  }
  render() {
    return (
      <div className="overlay">
        <Form
          showRegistrationForm={this.state.showRegistrationForm}
          handleRegistrationClick={this.handleRegistrationClick}
          showUserLoginForm={this.state.showUserLoginForm}
          handleClick={this.handleClick}
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
          {this.props.showUserLoginForm ? null : <h1>See Food</h1> }
          {this.props.showRegistrationForm ? <h1>Register</h1> : null }
          {this.props.showUserLoginForm ? <h1>Log In</h1> : null }
          {this.props.showUserLoginForm ? null : <form className="zip-form" action="/landings" method="POST">
              <input type="text" name="zip" placeholder="Enter zip code" />
              <input className="btn btn-primary btn-sm" type="submit" value="Submit" />
            </form> }  

          {this.props.showRegistrationForm ? null : <form className="zip-form" action="/landings" method="POST">
            <input type="text" name="zip" placeholder="Enter zip code" />
            <input className="btn btn-primary btn-sm" type="submit" value="Submit" />
          </form> }  
            
            <div className="modal-footer">

              {this.props.showRegistrationForm ? null : <input onClick={this.props.handleRegistrationClick} type="submit" value="Register" className="landing-buttons btn btn-outline-secondary" /> }
              
              {this.props.showRegistrationForm ? <Registration /> : null}

              {this.props.showUserLoginForm ? null : <input onClick={this.props.handleClick} type="submit" value="Login" className="landing-buttons btn btn-outline-secondary" /> }
              
              {this.props.showUserLoginForm ? <UserLogin /> : null }

            </div>
          </div>
        </div>
      </div>
    )
  }
}
