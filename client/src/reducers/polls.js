import constants from '../constants';

const {
  store: { polls },
} = constants;

const INITIAL_STATE = {
  pollsList: [],
  poll: {},
  isLoading: false,
  error: null,
};

const pollsReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case polls.LOAD_POLLS_REQUEST:
      return { ...state, isLoading: true };
    case polls.LOAD_POLLS_SUCCESS:
      return {
        ...state,
        pollsList: [...payload],
        error: null,
        isLoading: false,
      };
    case polls.LOAD_POLLS_FAILURE:
      return { ...state, error: payload, isLoading: false };
    case polls.LOAD_POLL_REQUEST:
      return { ...state, isLoading: true };
    case polls.LOAD_POLL_SUCCESS:
      return { ...state, poll: { ...payload }, error: null };
    case polls.LOAD_POLL_FAILURE:
      return { ...state, error: payload, isLoading: false };
    case polls.ADD_POLL_REQUEST:
      return { ...state, isLoading: true };
    case polls.ADD_POLL_SUCCESS:
      return { ...state, error: null, isLoading: false };
    case polls.ADD_POLL_FAILURE:
      return { ...state, error: payload, isLoading: false };
    case polls.EDIT_POLL_REQUEST:
      return { ...state, isLoading: true };
    case polls.EDIT_POLL_SUCCESS:
      return { ...state, error: null, isLoading: false };
    case polls.EDIT_POLL_FAILURE:
      return { ...state, error: payload, isLoading: false };
    case polls.DELETE_POLL_REQUEST:
      return { ...state, isLoading: true };
    case polls.DELETE_POLL_SUCCESS:
      return { ...state, error: null, isLoading: false };
    case polls.DELETE_POLL_FAILURE:
      return { ...state, error: payload, isLoading: false };
    case polls.VOTE_REQUEST:
      return { ...state, isLoading: true };
    case polls.VOTE_SUCCESS:
      return { ...state, poll: { ...payload }, error: null, isLoading: false };
    case polls.VOTE_FAILURE:
      return { ...state, error: payload, isLoading: false };
    default:
      return state;
  }
};

export default pollsReducer;
