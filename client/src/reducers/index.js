import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import usersReducer from './users';
import categoriesReducer from './categories';
import pollsReducer from './polls';

const rootReducer = combineReducers({
  form: formReducer,
  user: usersReducer,
  categories: categoriesReducer,
  polls: pollsReducer,
});

export default rootReducer;
