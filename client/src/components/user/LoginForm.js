import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'semantic-ui-react';

const styles = {
  errorMsg: {
    color: '#ff0000',
    fontSize: '0.85rem',
  },
};

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: null,
  };

  onChange = e =>
    this.setState({
      [e.target.name]: e.target.value,
    });

  onLogin = e => {
    e.preventDefault();
    const { email, password } = this.state;

    if (email.trim() !== '' && password.trim() !== '') {
      this.props.loginUser(email, password, this.props.history);
      this.setState({
        email: '',
        password: '',
        error: null,
      });
    } else {
      this.setState({
        error: 'Please make sure to enter valid email and password',
      });
    }
  };

  render() {
    const { email, password, error } = this.state;

    return (
      <Form onSubmit={this.onLogin}>
        <Form.Input
          label="Enter Email"
          type="text"
          name="email"
          value={email}
          onChange={this.onChange}
        />
        <Form.Input
          label="Enter Password"
          type="password"
          name="password"
          value={password}
          onChange={this.onChange}
        />
        {error && <span style={styles.errorMsg}>{error}</span>}
        <Form.Field control={Button}>Sign In</Form.Field>
      </Form>
    );
  }
}

LoginForm.propTypes = {
  loginUser: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export default LoginForm;
