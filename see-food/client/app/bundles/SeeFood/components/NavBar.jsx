import React, { PropTypes } from 'react';
import UserLoggedInFeature from './UserLoggedInFeature';

export default class NavBar extends React.Component {
  // handleChange(e) {
  //   const name = e.target.value;
  //   this.props.updateName(name);


  render() {

    return (
      <div className="row">
        <nav className="navbar navbar-default">
          <div className="col-md-10">
            <div className="container-fluid">
              <a className="navbar-brand nav-font-size" href="/landings">See Food</a>
              <form className="zip-form nav-font-size" action="/landings" method="POST">
                <input className="nav-search" type="text" name="zip" placeholder="Enter zip code" />
                <input className="btn btn-default" type="submit" value="Submit" />
              </form>
            </div>
          </div>

          {(this.props.user !== null) ? <UserLoggedInFeature user={this.props.user} /> : null}

        </nav>
      </div>
    );
  }
}
