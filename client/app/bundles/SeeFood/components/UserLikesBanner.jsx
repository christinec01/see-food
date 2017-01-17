import React from 'react';

class UserLikesBanner extends React.Component {
	render() {
		console.log("Im In UserLikesBanner")
		return (
			<h1 className="jumbotron">{this.props.user.first_name + "'s "}SeeFOOD</h1>
		)
	}
}

export default UserLikesBanner;