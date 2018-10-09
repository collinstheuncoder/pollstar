import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'semantic-ui-react';

const styles = {
  errorMsg: {
    color: '#ff0000',
    fontSize: '0.85rem',
  },
};

class RegisterForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
    error: null,
  };

  onChange = e =>
    this.setState({
      [e.target.name]: e.target.value,
    });

  onRegister = e => {
    e.preventDefault();
    const { name, email, password, passwordConfirm } = this.state;

    if (
      name.trim() !== '' &&
      email.trim() !== '' &&
      password.trim() !== '' &&
      passwordConfirm.trim() !== ''
    ) {
      this.props.registerUser(email, password, name, this.props.history);
      this.setState({
        name: '',
        email: '',
        password: '',
        passwordConfirm: '',
        error: null,
      });
    } else {
      this.setState({
        error: 'Please make sure to enter valid credentials',
      });
    }
  };

  render() {
    const { name, email, password, passwordConfirm, error } = this.state;

    return (
      <Form onSubmit={this.onRegister}>
        <Form.Input
          label="Enter Name"
          type="text"
          name="name"
          value={name}
          onChange={this.onChange}
        />
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
        <Form.Input
          label="Confirm Password"
          type="password"
          name="passwordConfirm"
          value={passwordConfirm}
          onChange={this.onChange}
        />
        {error ||
          (this.props.error && (
            <span style={styles.errorMsg}>
              {error || this.props.error.message}
            </span>
          ))}
        <Form.Field control={Button}>Sign Up</Form.Field>
      </Form>
    );
  }
}

RegisterForm.propTypes = {
  registerUser: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export default RegisterForm;
