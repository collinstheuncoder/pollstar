import axios from 'axios';
import constants from '../constants';

const { store: { categories } } = constants;

// Fetch All Polls
export const allPollCategories = () => async dispatch => {
  try {
    const response = await axios.get('/categories');

    dispatch({
      type: categories.LOAD_CATEGORIES_SUCCESS,
      payload: response.data.categories,
    });
  } catch (error) {
    dispatch({ type: categories.LOAD_CATEGORIES_FAILURE, payload: error });
  }
};

// Fetch Specific Poll
export const specificPollCategory = categoryName => async dispatch => {
  try {
    const response = await axios.get(
      `/categories/${categoryName}`
    );

    dispatch({
      type: categories.LOAD_CATEGORY_SUCCESS,
      payload: response.data.category,
    });
  } catch (error) {
    dispatch({ type: categories.LOAD_CATEGORY_FAILURE, payload: error });
  }
};
