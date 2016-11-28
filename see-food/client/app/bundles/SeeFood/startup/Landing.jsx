import React from 'react';
import ReactOnRails from 'react-on-rails';
import LandingPage from '../components/LandingPage';
import Registration from '../components/Registration';

const Landing = (props) => (
  <div>
    <LandingPage {...props} />
    <Registration {...props} />
  </div>
);

// This is how react_on_rails can see the SeeFoodApp in the browser.
ReactOnRails.register({Landing});
