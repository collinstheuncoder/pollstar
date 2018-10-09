import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export default function(ComposedComponent) {
  class NotLoggedin extends Component {
    componentWillMount() {
      if (this.props.loggedIn) {
        this.props.history.push('/user/account');
      }
    }

    componentWillUpdate(nextProps) {
      if (nextProps.loggedIn) {
        this.props.history.push('/user/account');
      }
    }

    PropTypes = {
      router: PropTypes.object,
    };

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return { loggedIn: state.user.loggedIn };
  }

  return connect(mapStateToProps)(NotLoggedin);
}
