import React from 'react';
import ReactOnRails from 'react-on-rails';

import SeeFood from '../containers/SeeFoodApp';

const SeeFoodApp = (props) => (
  <SeeFood spots={props.spots}/>
);

// This is how react_on_rails can see the SeeFoodApp in the browser.
ReactOnRails.register({ SeeFoodApp });
