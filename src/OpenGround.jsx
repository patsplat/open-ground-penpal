import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import Routes from './routes';
import Navigation from './navigation';
import OpenGroundTheme from './open-ground-theme';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <OpenGroundTheme>
        <Navigation />
        <Routes />
      </OpenGroundTheme>
    </React.Fragment>
  );
}

export default App;
