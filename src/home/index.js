import React from "react";

import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

import { Header, Footer } from '../layout';

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
    '& P': {
      marginBottom: theme.spacing(2),
    },
    '& h1': {
      marginBottom: theme.spacing(2),
    },
    '& h2': {
      marginBottom: theme.spacing(2),
    },
    '& h3': {
      marginBottom: theme.spacing(2),
    },
  },
  textfield: {
    marginBottom: theme.spacing(2)
  },
  signupButton: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(2),
  },
}));

const P = Typography;
const H3 = ({children, ...props}) => {
  return (
    <Typography variant="h3" {...props}>
      {children}
    </Typography>
  );
}

export const Home = (props) => {
  const classes = useStyles(props);

  const code_conduct_label = (
    <>I agree to follow<br />the Code of Conduct *</>
  )

  return (
    <React.Fragment>
      <Header />
      <Container className={classes.container} maxWidth="md">
        <Paper elevation={3} className={classes.paper}>
          <Typography variant="h1">Open Ground</Typography>
          <Typography variant="h2">An open call for slow-paced art exchange</Typography>

          <P>Open Ground is an arts-focused pen-pal service inspired by Rachel Syme's #PenPalooza.</P>

          <P>We miss going to galleries.  We miss seeing shows.  We miss each other.  We've been filling the gap with Twitter and Instagram and Zoom.  Fiddling with screens and keyboards all day is tiring.  And we love the USPS.</P>

          <P>So why not exchange hand-made artwork with a pen-pal?</P>
        </Paper>

        <Paper className={classes.paper}>
          <H3>How does it work?</H3>

          <P>1. Sign up to get the name and address of another artist.</P>
          
          <P>2. Make art!</P>

          <P>3. Mail art!</P>

          <P>4. Receive art!</P>

          <P>Following the first exchange, you may continue the correspondance as [in]frequently as desired.</P>
        </Paper>

        <Paper className={classes.paper}>
          <H3>Sign up</H3>

          <Grid container spacing={3}>
            <Grid item xs={4}>
              <Typography variant="body2">
              Provide your name and address
              </Typography>

              <TextField id="name" required label="Name" variant="outlined" fullWidth className={classes.textfield} />
              <TextField id="address" required label="Mailing Address" variant="outlined" fullWidth multiline rows={4} />
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2">
                Consider sharing relevant info
              </Typography>
              <TextField id="info" label="Info (Optional)" variant="outlined" fullWidth multiline rowsMax={4} className={classes.textfield} />

              <FormControlLabel control={<Checkbox name="code_conduct" required />}
                label={code_conduct_label}
              />
            </Grid>
            <Grid item xs={4}>

              <Button variant="contained" color="primary" size="large" fullWidth className={classes.signupButton}>
                Signup with Google
              </Button>
              <Typography variant="body2">
                This will only be used to login.
              </Typography>

              <Typography variant="caption">
                After picking a Google account, you will be forwarded to the profile page where your pen-pal awaits.
              </Typography>

            </Grid>
          </Grid>
        </Paper>
      </Container>
      <Footer />
    </React.Fragment>
  );
}

export default Home;