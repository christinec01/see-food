import React from 'react';
import ReactOnRails from 'react-on-rails';
import LandingPage from '../components/LandingPage';
import UserLogin from '../components/UserLogin';
const Landing = () => ( 
  	<LandingPage />
);

// This is how react_on_rails can see the SeeFoodApp in the browser.
// ReactOnRails.register({ Landing });
ReactOnRails.register({ Landing });