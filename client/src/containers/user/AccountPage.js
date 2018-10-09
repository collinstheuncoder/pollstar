import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Image } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { editUser, resetPassword, deleteUser } from '../../actions/user';
import Head from '../../components/shared/Head';
import AccountHeader from '../../components/user/AccountHeader';

const styles = {
  card: {
    width: 'auto',
    borderRadius: 0,
  },
  image: {
    borderRadius: '0 !important',
  },
  button: {
    margin: '0.25rem',
  },
};

class AccountInfo extends Component {
  render() {
    const { user, editUser, resetPassword, deleteUser, history } = this.props;

    return (
      <Fragment>
        <Head
          title="Pollstar | User Account"
          description="User account page of Pollstar"
        />
        <Card style={styles.card}>
          {user && (
            <Image
              style={styles.image}
              src={user.photoURL || 'https://imgur.com/mVRm8tF.png'}
              size="small"
            />
          )}
          <Card.Content>
            {user && <Card.Header>{user.displayName || 'Anonymous'}</Card.Header>}
          </Card.Content>
          <Card.Content>
            <Button.Group labeled icon>
              <Button
                style={styles.button}
                icon="edit"
                color="blue"
                content="Edit Profile"
                onClick={() => editUser()}
              />
              {user &&
                user.email && (
                  <Button
                    style={styles.button}
                    icon="refresh"
                    color="green"
                    content="Reset Password"
                    onClick={() => resetPassword(user.email)}
                  />
                )}
              <Button
                style={styles.button}
                icon="delete"
                color="red"
                content="Delete Profile"
                onClick={() => deleteUser(history)}
              />
            </Button.Group>
          </Card.Content>
        </Card>
        <AccountHeader />
      </Fragment>
    );
  }
}

AccountInfo.propTypes = {
  user: PropTypes.object,
  error: PropTypes.object,
  editUser: PropTypes.func,
  resetPassword: PropTypes.func,
  deleteUser: PropTypes.func,
};

AccountInfo.defaultProps = {
  user: null,
  error: null,
};

const mapStateToProps = state => {
  return {
    user: state.user.user,
    error: state.user.error,
  };
};

export default withRouter(
  connect(mapStateToProps, { editUser, resetPassword, deleteUser })(AccountInfo)
);
