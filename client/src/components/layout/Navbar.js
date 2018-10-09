import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { logoutUser } from '../../actions/user';
import constants from '../../constants';

const {
  routes: {
    LANDING,
    HOME,
    REGISTER,
    LOGIN,
    ACCOUNT,
    POLL_LIST,
    NEW_POLL,
    CATEGORIES,
  },
} = constants;

function Navbar({ history, loggedIn, logoutUser }) {
  return (
    <Menu pointing secondary>
      <Menu.Menu position="left">
        {loggedIn ? (
          <Menu.Item as={NavLink} name="Pollstar" to={HOME} />
        ) : (
          <Menu.Item as={NavLink} exact name="Pollstar" to={LANDING} />
        )}
      </Menu.Menu>
      <Menu.Menu>
        <Menu.Item as={NavLink} exact name="All Polls" to={POLL_LIST} />
        <Menu.Item as={NavLink} exact name="Polls Categories" to={CATEGORIES} />
        {loggedIn && (
          <Menu.Item as={NavLink} name="Create Poll" to={NEW_POLL} />
        )}
      </Menu.Menu>
      <Menu.Menu position="right">
        {loggedIn ? (
          <Fragment>
            <Menu.Item as={NavLink} name="Account" to={ACCOUNT} />
            <Menu.Item
              as={NavLink}
              name="Logout"
              to="#"
              onClick={() => logoutUser(history)}
            />
          </Fragment>
        ) : (
          <Fragment>
            <Menu.Item as={NavLink} name="Register" to={REGISTER} />
            <Menu.Item as={NavLink} name="Login" to={LOGIN} />
          </Fragment>
        )}
      </Menu.Menu>
    </Menu>
  );
}

Navbar.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  logoutUser: PropTypes.func.isRequired,
};

Navbar.defaultProps = {
  loggedIn: false,
};

const mapStateToProps = state => {
  return {
    loggedIn: state.user.loggedIn,
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { logoutUser }
  )(Navbar)
);
