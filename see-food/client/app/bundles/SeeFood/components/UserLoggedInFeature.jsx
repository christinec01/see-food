import React from 'react';

class UserLoggedInFeature extends React.Component {
	render() {
		console.log("Im In UserLoggedInFeature")
		return (
			<div className="col-md-6 ta-right nav-font-size">
        <span><a href={"/users/" + this.props.user.id + "/likes"}>My Likes</a> | <a href="/logout">Logout</a></span> 
      </div>
		)
	}
}

export default UserLoggedInFeature;
