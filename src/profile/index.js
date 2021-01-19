import React from "react";

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ReactMarkdown from 'react-markdown'


import { Header, Footer } from "../layout";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
    '& h1': {
      marginBottom: theme.spacing(2),
    },
  }
}));

export const Profile = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Header isProfile={true} />
      <Container>
        <Paper className={classes.paper}>
          <Typography variant="h1">Profile</Typography>
          <ReactMarkdown>
          {`
          *Your data*
          Name
          Mailing Address
          Info
          
          *Your Pen-pal:*
          Name
          address
          info
          (assigned Jan 1, 2021)

          Tracking Number (optional)
          Delivered by (select)
          Report Shipped

          *Expect an Artwork from:*
          Name
          address
          info
          (assigned Jan 1, 2021)

          Tracking Number (optional)
          Delivered by (select)
          Report Received

          ### Need Help?
           Anything at all?

          Checkout what's going on at https://www.instagram.com/explore/tags/opengroundpenpal/

          Let me know if there are any issues.  Send DM to https://www.instagram.com/patricksdata/
          `}
          </ReactMarkdown>
          
        </Paper>
      </Container>
      <Footer />
    </React.Fragment>
  )
}

export default Profile;