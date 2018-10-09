import axios from 'axios';
import constants from '../constants';

const { store: { users }, routes: { LANDING, HOME } } = constants;

export const registerUser = (
  email,
  password,
  name,
  history
) => async dispatch => {
  try {
    const response = await axios.post('/auth/register', {
      email,
      password,
      name
    });

    // Save token to localStorage
    localStorage.setItem('pollstar-token', response.data.token);

    // If authenticated get user info
    const userInfo = await getUserInfo(response.data.token);

    dispatch({
      type: users.REGISTER_SUCCESS,
      payload: userInfo.data.user
    });

    // If authenticated get user info
    getUserInfo(response.data.token);

    // Redirect to Home page upon successful registration
    history.push(HOME);
  } catch (error) {
    dispatch({ type: users.REGISTER_FAILURE, payload: error });
  }
};

export const loginUser = (email, password, history) => async dispatch => {
  try {
    const response = await axios.post('/auth/login', {
      email,
      password
    });

    // Save token to localStorage
    localStorage.setItem('pollstar-token', response.data.token);

    // If authenticated get user info
    const userInfo = await getUserInfo(response.data.token);

    dispatch({ type: users.LOGIN_SUCCESS, payload: userInfo.data.user });

    // Redirect to Home page upon successful login
    history.push(HOME);
  } catch (error) {
    dispatch({ type: users.LOGIN_FAILURE, payload: error.message });
  }
};

export const socialLogin = (social, history) => async dispatch => {
  try {
    // To add functionality
    let response;

    // Save token to localStorage
    localStorage.setItem('pollstar-token', response.data.token);

    dispatch({ type: users.SOCIAL_SUCCESS, payload: response.data.token });

    // Redirect to Home page upon successful login
    history.push(HOME);
  } catch (error) {
    dispatch({ type: users.SOCIAL_FAILURE, payload: error });
  }
};

export const logoutUser = history => dispatch => {
  try {
    // Remove token from localStorage
    localStorage.removeItem('pollstar-token');

    dispatch({ type: users.LOGOUT_SUCCESS });

    // Redirect to Landing page upon successful logout
    history.push(LANDING);
  } catch (error) {
    dispatch({ type: users.LOGOUT_FAILURE, payload: error });
  }
};

export const editUser = userId => async dispatch => {};

export const resetPassword = userId => dispatch => {};

export const deleteUser = history => dispatch => {};

// Get authenticated user's info
async function getUserInfo(token) {
  const response = await axios.post('/auth/me', { token });
  return response;
}
