import React from 'react';
import ReactOnRails from 'react-on-rails';
import LandingPage from '../components/LandingPage';
import Registration from '../components/Registration';
import UserLogin from '../components/UserLogin';

const Landing = (props) => ( 
  	<LandingPage />
  	
);

ReactOnRails.register({ Landing });