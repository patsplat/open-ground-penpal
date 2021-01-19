import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: [ 'IBM Plex Sans' ],
    h1: {
      fontFamily: [ 'IBM Plex Mono' ],
      fontWeight: 400,
      fontSize: "3rem",
      lineHeight: 1.167,
      letterSpacing: "0em",
    },
    h2: {
      fontFamily: [ 'IBM Plex Mono' ],
      fontWeight: 400,
      fontSize: "2.125rem",
      lineHeight: 1.235,
      letterSpacing: "0.00735em",
    },
    h3: {
      fontFamily: [ 'IBM Plex Mono' ],
      fontWeight: 400,
      fontSize: "1.5rem",
      lineHeight: 1.334,
      letterSpacing: "0em",
    },
  },
  "palette":{
    "common":{
       "black":"#000",
       "white":"#fff"
    },
    "background":{
       "paper":"rgba(255, 255, 255, 1)",
       "default": "#e8f5e9",
    },
    "primary":{
       "light":"rgba(73, 73, 73, 1)",
       "main":"rgba(34, 34, 34, 1)",
       "dark":"rgba(0, 0, 0, 1)",
       "contrastText":"rgba(255, 255, 255, 1)"
    },
    "secondary":{
       "light":"rgba(112, 112, 112, 1)",
       "main":"rgba(69, 69, 69, 1)",
       "dark":"rgba(30, 30, 30, 1)",
       "contrastText":"rgba(255, 255, 255, 1)"
    },
    "error":{
       "light":"rgba(209, 67, 43, 1)",
       "main":"rgba(65, 117, 5, 1)",
       "dark":"rgba(101, 0, 0, 1)",
       "contrastText":"rgba(255, 255, 255, 1)"
    },
    "text":{
       "primary":"rgba(55, 58, 60, 1)",
       "secondary":"rgba(0, 0, 0, 0.54)",
       "disabled":"rgba(0, 0, 0, 0.38)",
       "hint":"rgba(0, 0, 0, 0.38)"
    }
 }
});

export const OpenGroundTheme = ({children}) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}

export default OpenGroundTheme;
