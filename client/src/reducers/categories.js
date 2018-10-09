import constants from '../constants';

const { store: { categories } } = constants;

const INITIAL_STATE = {
  categoriesList: [],
  category: {},
  isLoading: false,
  error: null,
};

const categoriesReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  	case categories.LOAD_CATEGORIES_REQUEST:
      return { ...state, isLoading: true };
    case categories.LOAD_CATEGORIES_SUCCESS:
      return { ...state, categoriesList: [...payload], error: null, isLoading: false, };
    case categories.LOAD_CATEGORIES_FAILURE:
      return { ...state, error: payload, isLoading: false };
    case categories.LOAD_CATEGORY_REQUEST:
      return { ...state, isLoading: true };
    case categories.LOAD_CATEGORY_SUCCESS:
      return { ...state, poll: { ...payload }, error: null, isLoading: false, };
    case categories.LOAD_CATEGORY_FAILURE:
      return { ...state, error: payload, isLoading: false };
    default:
      return state;
  }
};

export default categoriesReducer;
