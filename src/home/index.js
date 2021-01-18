import React from "react";

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(2),
    '& P': {
      marginBottom: theme.spacing(2),
    },
  },
  paper: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  subtitle: {
    marginBottom: theme.spacing(4)
  },
}));

const P = Typography;
const H5 = ({children, ...props}) => {
  return (
    <Typography variant="h5" component="h3" {...props}>
      {children}
    </Typography>
  );
}

export const Home = (props) => {
  const classes = useStyles(props);

  return (
    <Container className={classes.container}>
      <Paper elevation={3} className={classes.paper}>
        <Typography variant="h3" component="h1">Open Ground</Typography>
        <Typography variant="h4" component="h2" className={classes.subtitle}>An open call for slow-paced mail art</Typography>

        <P>Open Ground is an arts-focused pen-pal service inspired by Rachel Syme's #PenPalooza.</P>

        <P>We miss going to galleries.  We miss seeing shows.  We miss each other.  We've been filling the gap with Twitter and Instagram and Zoom.  Fiddling with screens and keyboards all day is tiring.  And we love the USPS.</P>

        <P>So why not exchange hand-made artwork with a pen-pal?</P>
      </Paper>

      <Paper className={classes.paper}>
        <H5>How does it work?</H5>

        <P>1. Sign up to get the name and address of another artist.</P>
        
        <P>2. Make art!</P>

        <P>3. Mail art!</P>

        <P>4. Receive art!</P>
      </Paper>

      <Paper className={classes.paper}>
        <H5>Instructions</H5>

        <P>Provide your name, mailing address below.  Share something about yourself in the notes field.  Then click "Sign up with Google".  After picking a Google account for your login, you will be forwarded to the profile page where your pen-pal awaits.</P>

        <Box><TextField id="name" label="Name" variant="outlined" /></Box>
        <Box><TextField id="address" label="Address" variant="outlined" multiline rows={4} /></Box>
        <Box><TextField id="notes" label="Notes" variant="outlined" multiline rowsMax={5} /></Box>

      </Paper>
    </Container>
  );
}

export default Home;