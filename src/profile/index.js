import React from "react";

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ReactMarkdown from 'react-markdown'
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

import { Header, Footer } from "../layout";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
    '& h1': {
      marginBottom: theme.spacing(2),
    },
  },
  yourartpal: {
    marginBottom: theme.spacing(2),
  },
  artpal: {
    marginTop: theme.spacing(2),
  },
  about: {
    marginTop: theme.spacing(1),
  },
  picked: {
    marginBottom: theme.spacing(3),
  }
}));

export const Profile = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Header isProfile={true} />
      <Container>
        <Paper className={classes.paper}>
          <Typography variant="h1">Your Art Pal</Typography>

          <Typography variant="body1">Please send your Art Pal an artwork....</Typography>  

          <Typography variant="h3" className={classes.artpal}>Joseph Beuys</Typography>
          <Typography variant="body1">
            239 Buffalo Ave
          </Typography>
          <Typography variant="body1">
            Brooklyn, NY 11213
          </Typography>
          <Typography variant="body1" className={classes.about}>
            I like artwork about long walks at the beach
          </Typography>
          <Typography variant="body2" className={classes.picked}>
           <i>picked Jan 1, 2021</i>
          </Typography>

          <FormControlLabel
            control={
              <Checkbox
                name="checkedB"
              />
            }
            label="Have you mailed your artwork?"
          />

          <details>
          <TextField id="outlined-basic" label="Tracking number" variant="outlined" /> 
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
          >
            <MenuItem value={10}>USPS</MenuItem>
            <MenuItem value={20}>UPS</MenuItem>
            <MenuItem value={30}>FedEx</MenuItem>
          </Select>
          <Button variant="contained" color="primary">
            Share Tracking Info
          </Button>
          </details>
        </Paper>

        <Paper className={classes.paper}>
          <Typography variant="h2">Your Profile (Edit)</Typography>
          <Typography variant="h3" className={classes.artpal}>Gloria Vanderbilt</Typography>
          <Typography variant="body2">
            239 Buffalo Ave
          </Typography>
          <Typography variant="body2">
            Brooklyn, NY 11213
          </Typography>
          <Typography variant="body2" className={classes.about}>
            I like artwork about long walks at the beach
          </Typography>
          
          <p>Something's coming:</p>
          <p>table of tracking info here</p>
        </Paper>
      </Container>
      <Footer />
    </React.Fragment>
  )
}

export default Profile;