import React from 'react';
import ReactOnRails from 'react-on-rails';
import SeeFoodContainer from '../containers/SeeFoodContainer';

const SeeFoodApp = (props) => {
  let spots = props.spots.map((spot, i) => {
    spot.url = props.url[i];
    return spot;
  });

  return (
    <SeeFoodContainer {...props} spots={spots} />
  );
}

// This is how react_on_rails can see the SeeFoodApp in the browser.
ReactOnRails.register({ SeeFoodApp });
