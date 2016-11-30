import React from 'react';

class UserLikesBanner extends React.Component {
	render() {
		console.log("Im In UserLikesBanner")
		return (
			<h2 className="jumbotron">{this.props.user.first_name + "'s "}SeeFOOD</h2>
		)
	}
}

export default UserLikesBanner;