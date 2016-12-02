import React, { PropTypes } from 'react';
import UserLoggedInFeature from './UserLoggedInFeature';

export default class NavBar extends React.Component {
  // handleChange(e) {
  //   const name = e.target.value;
  //   this.props.updateName(name);


  render() {

    return (
      <div className="nav-style">
        <div className="row">
          <nav className="navbar navbar-default">
            <div className="col-md-10">
              <div className="container-fluid">
                <a className="navbar-brand nav-link" href="/landings"><h2>See FOOD</h2></a>
                <form className="zip-form" action="/landings" method="POST">
                  <input className="nav-search" type="text" name="zip" placeholder="Zip Code" />
                  <input className="btn btn-default" type="submit" value="Go!" />
                </form>
              </div>
            </div>

            {(this.props.user !== null) ? <UserLoggedInFeature user={this.props.user} /> : null}

          </nav>
        </div>
      </div>
    );
  }
}
