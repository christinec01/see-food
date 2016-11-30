import React from 'react';

class UserLikesFoodGrid extends React.Component {
	render() {
		console.log(this.props)
	
		let thumbs = this.props.restaurants.map((restaurant, idx) => {
			// console.log(restaurant)
			return (
				<div className="col-xs-6 col-md-3" key={idx}>
					<h2>{restaurant.name}</h2>
					<a href="#" className="thumbnail">
						<img src={restaurant.picture_url}/>
					</a>
				</div>
			)
		})
		
		// console.log(thumbs)
		return (
			<div className="row container">
				{thumbs}
			</div>
		)
	}
}
export default UserLikesFoodGrid;