import React from 'react';
import ReactOnRails from 'react-on-rails';
import SeeFoodContainer from '../containers/SeeFoodContainer';
// import Landing from './Landing';

const SeeFoodApp = (props) => (
  <SeeFoodContainer {...props} />
);

// This is how react_on_rails can see the SeeFoodApp in the browser.
ReactOnRails.register({ SeeFoodApp });
