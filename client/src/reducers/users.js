import constants from '../constants';

const { store: { users } } = constants;

const INITIAL_STATE = {
  user: {},
  loggedIn: false,
  isLoading: false,
  error: null,
};

const usersReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case users.REGISTER_REQUEST:
      return { ...state, isLoading: true };
    case users.REGISTER_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        user: { ...state.user, ...payload },
        error: null,
        isLoading: false,
      };
    case users.REGISTER_FAILURE:
      return { ...state, loggedIn: false, error: payload, isLoading: false };
    case users.LOGIN_REQUEST:
      return { ...state, isLoading: true };
    case users.LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        user: { ...state.user, ...payload },
        error: null,
        isLoading: false,
      };
    case users.LOGIN_FAILURE:
      return { ...state, loggedIn: false, error: payload };
    case users.SOCIAL_REQUEST:
      return { ...state, isLoading: true };
    case users.SOCIAL_SUCCESS:
      return { ...state, loggedIn: true, error: null };
    case users.SOCIAL_FAILURE:
      return { ...state, loggedIn: false, error: payload };
    case users.LOGOUT_REQUEST:
      return { ...state, isLoading: true };
    case users.LOGOUT_SUCCESS:
      return { ...state, loggedIn: false, user: {}, error: null };
    case users.LOGOUT_FAILURE:
      return { ...state, loggedIn: true, error: payload };
    case users.DELETE_USER_REQUEST:
      return { ...state, isLoading: true };
    case users.DELETE_USER_SUCCESS:
      return { ...state, loggedIn: false, error: null, isLoading: false };
    case users.DELETE_USER_FAILURE:
      return { ...state, loggedIn: true, error: payload, isLoading: false };
    default:
      return state;
  }
};

export default usersReducer;
