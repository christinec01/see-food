import React from 'react';
import ReactOnRails from 'react-on-rails';
import UserLikesIndexContainer from '../containers/UserLikesIndexContainer';

const UserLikesIndex = (props) => {
	return(
			<UserLikesIndexContainer user={props.user} restaurants={props.restaurants} />
		)
};

ReactOnRails.register({ UserLikesIndex });