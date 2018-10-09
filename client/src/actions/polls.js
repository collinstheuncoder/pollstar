import axios from 'axios';
import constants from '../constants';

const {
  store,
  // eslint-disable-next-line
  routes: { POLL_LIST },
} = constants;

// Fetch All Polls
export const loadPolls = () => async dispatch => {
  try {
    const response = await axios.get('/polls');

    dispatch({
      type: store.polls.LOAD_POLLS_SUCCESS,
      payload: response.data.polls,
    });
  } catch (error) {
    dispatch({ type: store.polls.LOAD_POLLS_FAILURE, payload: error });
  }
};

// Fetch Specific Poll
export const loadPoll = (category, pollId) => async dispatch => {
  try {
    const response = await axios.get(
      `/polls/${category}/${pollId}`
    );

    dispatch({
      type: store.polls.LOAD_POLL_SUCCESS,
      payload: response.data.poll,
    });
  } catch (error) {
    dispatch({ type: store.polls.LOAD_POLL_FAILURE, payload: error });
  }
};

// Create New Poll
export const addNewPoll = (
  newPoll,
  category = 'other',
  history
) => async dispatch => {
  try {
    await axios.post('/polls/new', newPoll);

    dispatch({ type: store.polls.ADD_POLL_SUCCESS });
    //history.push(`${POLL_LIST}/${category}`);
  } catch (error) {
    dispatch({ type: store.polls.ADD_POLL_FAILURE, payload: error });
  }
};

// Vote in Poll
export const voteInPoll = (
  category,
  pollId,
  votedItem,
  voterId
) => async dispatch => {
  try {
    const response = await axios.post(
      `/polls/${category}/${pollId}/vote`,
      {
        ...votedItem,
        voterId,
      }
    );

    dispatch({ type: store.polls.VOTE_SUCCESS, payload: response.data.poll });
  } catch (error) {
    dispatch({ type: store.polls.VOTE_FAILURE, payload: error.message });
  }
};

// Edit Poll
export const editPoll = (
  editedPoll,
  category,
  pollId,
  history
) => async dispatch => {
  try {
    await axios.update(
      `/polls/${category}/${pollId}/edit`,
      editedPoll
    );

    dispatch({ type: store.polls.EDIT_POLL_SUCCESS });
  } catch (error) {
    dispatch({ type: store.polls.EDIT_POLL_FAILURE, payload: error });
  }
};

// Delete Poll
export const deletePoll = (category, pollId, history) => async dispatch => {
  try {
    await axios.delete(
      `/polls/${category}/${pollId}/delete`
    );

    dispatch({ type: store.polls.DELETE_POLL_SUCCESS });
  } catch (error) {
    dispatch({ type: store.polls.DELETE_POLL_FAILURE, payload: error });
  }
};
