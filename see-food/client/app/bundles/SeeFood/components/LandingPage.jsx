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

/*
  bla bla Form render() return (
    <form className="" onSubmit={this.props.onSubmit}>
      {...this.children}
    </form>
  )

  bla bal OtherComponent render() return {
    <Form onSubmit={somFucntion}>
      <input name="first_name">
    </Form>

    <label>
      <input />
    </label>

  }
*/

class Form extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="modal-content zip-modal">
          <div className="modal-body">
          {this.props.showUserLoginForm || this.props.showRegistrationForm ? null : <h1 className="landing-title">See Food</h1> }
          {this.props.showRegistrationForm ? <h1 className="landing-title">Register</h1> : null }
          {this.props.showUserLoginForm ? <h1 className="landing-title">Log In</h1> : null }
          {(this.props.showUserLoginForm || this.props.showRegistrationForm) ? null :
            <form className="zip-form" action="/landings" method="POST">
              <input type="text" name="zip" placeholder="Enter zip code" />
              <input className="btn btn-primary btn-sm zip-submit-button" type="submit" value="Submit" />
            </form> }

            <div className="modal-footer">

              {this.props.showRegistrationForm || this.props.showUserLoginForm ? null : <input onClick={this.props.handleRegistrationClick} type="submit" value="Register" className="landing-buttons btn btn-outline-secondary register-button" /> }

              {this.props.showRegistrationForm ? <Registration /> : null}

              {this.props.showUserLoginForm || this.props.showRegistrationForm ? null : <input onClick={this.props.handleClick} type="submit" value="Login" className="landing-buttons btn btn-outline-secondary login-button" /> }

              {this.props.showUserLoginForm ? <UserLogin /> : null }

            </div>
          </div>
        </div>
      </div>
    )
  }
}
