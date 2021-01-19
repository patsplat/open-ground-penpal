import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from "react-router";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

export const Header = withRouter(({isProfile, history}) => {
  const classes = useStyles();
  const action = isProfile ? (
    <Button color="inherit" onClick={() => { history.push("/") }}>Logout</Button>
  ) : (
    <Button color="inherit" onClick={() => { history.push("/profile") }}>Login</Button>
  )

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Open Ground
          </Typography>
          {action}
        </Toolbar>
      </AppBar>
    </div>
  );
})

export const Footer = withRouter(({history}) => {
  return (
    <Container>
      Maintained by <a href="https://twitter.com/PatricksData">PatricksData</a>.
    </Container>
  )
});

export default Header;
