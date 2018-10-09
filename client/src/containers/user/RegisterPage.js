import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';

import { registerUser } from '../../actions/user';
import constants from '../../constants';
import Head from '../../components/shared/Head';
import AuthHeader from '../../components/user/shared/Header';
import AuthFooter from '../../components/user/shared/Footer';
import RegisterForm from '../../components/user/RegisterForm';

const styles = {
  signUpRow: {
    maxWidth: '30rem',
    margin: 'auto',
  },
};

function RegisterPage({ registerUser, history, error }) {
  const message = {
    pre: 'Already a member',
    post: 'to account',
  };

  return (
    <Grid>
      <Head
        title="Pollstar | Sign up"
        description="Sign up page of Pollstar"
      />
      <AuthHeader title="Create Account" />
      <Grid.Row style={styles.signUpRow}>
        <Grid.Column>
          <RegisterForm
            registerUser={registerUser}
            history={history}
            error={error}
          />
        </Grid.Column>
      </Grid.Row>
      <AuthFooter
        message={message}
        path={constants.routes.LOGIN}
        action="Login"
      />
    </Grid>
  );
}

RegisterPage.propTypes = {
  registerUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    error: state.user.error,
  };
};

export default connect(mapStateToProps, { registerUser })(RegisterPage);
