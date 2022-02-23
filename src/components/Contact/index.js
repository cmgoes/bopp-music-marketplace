import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import './contact.scss';

import AppStore from 'assets/imgs/appStore.png';
import PlayStore from 'assets/imgs/playStore.png';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 1200,
    width: '90%',
    margin: '0 auto 40px',
  },
  description: {
    marginTop: 0,
    marginBottom: 8,
  },
  formTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 20,
  },
  textField: {
    marginBottom: 20,
  },
  storeButtonBar: {
    display: 'flex',
    margin: '20px 0',
  },
  storeButton: {
    display: 'block',
    width: 180,
    height: 60,
    marginRight: 8,
  },
}));

const Contact = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* <p className={classes.description}>
        Truth Social in America&apos;s &quot;Big Tent&quot; social media
        platform that encourages an open, free, and honest global conversation
        without discriminating against political ideology.
      </p> */}
      <div className={classes.storeButtonBar}>
        <a
          className={classes.storeButton}
          href="https://apps.apple.com/ca/app/bopp-music/id1573437750"
          target="_blank"
          rel="noreferrer"
        >
          <img src={AppStore} alt="" width="100%" height="100%" />
        </a>
        <a
          className={classes.storeButton}
          href="https://boppmusic.net/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={PlayStore} alt="" width="100%" height="100%" />
        </a>
      </div>
      <div className={classes.formTitle}>Join for updates!</div>
      <div className={classes.textField}>
        <TextField fullWidth variant="outlined" label="First Name" />
      </div>
      <div className={classes.textField}>
        <TextField fullWidth variant="outlined" label="Last Name" />
      </div>
      <div className={classes.textField}>
        <TextField fullWidth variant="outlined" label="Email Address" />
      </div>
      {/* <FormControlLabel
        control={<Checkbox color="primary" />}
        label="I agree to TRUTH Social's & I also agree to receive emails from TRUTH Social and understand that I may opt out of TRUTH Social's subscription at any"
      /> */}
    </div>
  );
};

export default Contact;
