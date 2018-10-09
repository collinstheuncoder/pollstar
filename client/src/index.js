import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import axios from 'axios';
import 'semantic-ui-css/semantic.min.css';

import App from './components/App';
import constants from './constants';
import store from './store';
import './index.css';
import * as serviceWorker from './serviceWorker';

// Check if token present i.e user is still authenticated and login
const token = localStorage.getItem('pollstar-token');

autoLogin(token);

// Auto login user on refresh
async function autoLogin(token) {
	if (token) {
	  const userInfo = await getUserInfo(token);

	  store.dispatch({
	    type: constants.store.users.LOGIN_SUCCESS,
	    payload: userInfo.data.user,
	  });
	}
}

// Get authenticated user's info
async function getUserInfo(token) {
  const response = await axios.post('/auth/me', { token });
  return response;
}

ReactDOM.render(
	<Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>, 
  document.getElementById('root')
);

serviceWorker.unregister();
