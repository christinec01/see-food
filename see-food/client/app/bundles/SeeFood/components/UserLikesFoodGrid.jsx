import React from 'react';

class UserLikesFoodGrid extends React.Component {
	render() {
		console.log(this.props)

		let thumbs = this.props.restaurants.map((restaurant, idx) => {
			// console.log(restaurant)
			return (
				<div className="col-sm-6 col-md-6" >
					<div className="card user-show-card" key={idx} >
					<div className="hovereffect">
      				<img className="card-img-top img-responsive" src={restaurant.picture_url}/>
      		</div>
      				<div className="card-block">
        				<h3 className="card-title">{restaurant.name}</h3>
        				<p className="card-text">
								{restaurant.name}<br/>
								{restaurant.address}<br/>
								{"Phone: "+ restaurant.phone_number}
        				</p>
							</div>
					</div>
				</div>
			)
		})

		// console.log(thumbs)
		return (
			<div className="row">

				{thumbs}
				</div>

		)
	}
}
export default UserLikesFoodGrid;