import React, { PropTypes } from 'react';

export default class NavBar extends React.Component {
  // handleChange(e) {
  //   const name = e.target.value;
  //   this.props.updateName(name);
  // }
  logout = (e) => {
    fetch('/sessions', {
      method: 'POST',

    })
  }

  render() {
    return (
      <div className="row">
        <nav className="navbar navbar-default">
          <div className="col-md-6">
            <div className="container-fluid">
              <a className="navbar-brand nav-font-size" href="/landings">See Food</a>
              <form className="zip-form nav-font-size" action="/landings" method="POST">
                <input type="text" name="zip" placeholder="Enter zip code" />
                <input className="btn btn-primary btn-lg" type="submit" value="Submit" />
              </form>
            </div>
          </div>
          <div className="col-md-6 ta-right nav-font-size">
            <span><a href="#">My Settings</a> | <a onClick={this.logout} href="#">Logout</a></span>
          </div>
        </nav>
      </div>
    );
  }
}
