import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';

import { loginUser } from '../../actions/user';
import constants from '../../constants';
import Head from '../../components/shared/Head';
import AuthHeader from '../../components/user/shared/Header';
import AuthFooter from '../../components/user/shared/Footer';
import LoginForm from '../../components/user/LoginForm';
import SocialLogin from '../../components/user/SocialLogin';

const styles = {
  signInRow: {
    maxWidth: '50rem',
    margin: 'auto',
  },
};

function LoginPage({ loginUser, history, error }) {
  const message = {
    pre: 'Not yet a member',
    post: 'with us',
  };

  return (
    <Grid>
      <Head
        title="Pollstar | Log in"
        description="Log in page of Pollstar"
      />
      <AuthHeader title="Login to Account" />
      <Grid.Row style={styles.signInRow} columns={2} divided>
        <Grid.Column>
          <LoginForm 
            loginUser={loginUser} 
            history={history} 
            error={error} 
          />
        </Grid.Column>
        <SocialLogin />
      </Grid.Row>
      <AuthFooter
        message={message}
        path={constants.routes.REGISTER}
        action="Register"
      />
    </Grid>
  );
}

LoginPage.propTypes = {
  loginUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    error: state.user.error,
  };
};

export default connect(mapStateToProps, { loginUser })(LoginPage);
