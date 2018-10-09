import React from 'react';
import { Button, Grid, Icon } from 'semantic-ui-react';

const styles = {
  buttonGrp: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
  },
};

function SocialLogin({ socialLogin, history }) {
  return (
    <Grid.Column style={styles.buttonGrp}>
      <Button color="facebook" onClick={() => socialLogin('facebook', history)}>
        <Icon name="facebook" /> Sign in with Facebook
      </Button>
      <Button color="twitter" onClick={() => socialLogin('twitter', history)}>
        <Icon name="twitter" /> Sign in with Twitter
      </Button>
      <Button
        color="google plus"
        onClick={() => socialLogin('google', history)}
      >
        <Icon name="google plus" /> Sign in with Google
      </Button>
    </Grid.Column>
  );
}

export default SocialLogin;
