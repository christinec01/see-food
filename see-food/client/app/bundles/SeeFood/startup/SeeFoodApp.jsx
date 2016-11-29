import React from 'react';
import ReactOnRails from 'react-on-rails';
import SeeFoodContainer from '../containers/SeeFoodContainer';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// import Landing from './Landing';

const SeeFoodApp = (props) => {
  let spots = props.spots.map((spot, i) => {
    spot.url = props.url[i];
    return spot;
  });

  return (
    <MuiThemeProvider>
      <SeeFoodContainer {...props} spots={spots} />
    </MuiThemeProvider>
  );
}

// This is how react_on_rails can see the SeeFoodApp in the browser.
ReactOnRails.register({ SeeFoodApp });
