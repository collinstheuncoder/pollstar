import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export default function(ComposedComponent) {
  class Loggedin extends Component {
    componentWillMount() {
      if (!this.props.loggedIn) {
        this.props.history.push('/user/login');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.loggedIn) {
        this.props.history.push('/user/login');
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

  return connect(mapStateToProps)(Loggedin);
}
