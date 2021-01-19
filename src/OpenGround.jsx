import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router } from "react-router-dom";


import Routes from './routes';
import OpenGroundTheme from './open-ground-theme';

function App() {
  return (
    <Router forceRefresh={false}>
      <OpenGroundTheme>
        <CssBaseline />
        <Routes />
      </OpenGroundTheme>
    </Router>
  );
}

export default App;
