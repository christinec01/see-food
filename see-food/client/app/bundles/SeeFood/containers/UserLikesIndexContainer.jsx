import React, { PropTypes } from 'react';
import NavBar from '../components/NavBar';
import UserLikesBanner from '../components/UserLikesBanner'


// Simple example of a React "smart" component
export default class UserLikesIndex extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
  	console.log(this.props)
    return (

      <div>
        <NavBar user={this.props.user}/>
				<UserLikesBanner user={this.props.user}/>
      </div>
    );
  }
}
