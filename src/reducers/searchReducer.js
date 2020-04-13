import {
  SEARCH_RECIPE,
  FETCH_RECIPE_LIST,
  // FETCH_RECIPE_DETAIL,
  LOADING
} from '../actions/types';

const initialState = {
  text: '',
  listOfRecipe: [],
  loading: false,
  detail: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SEARCH_RECIPE:
      return {
        ...state,
        text: action.payload,
        loading: false
      };
    case FETCH_RECIPE_LIST:
      return {
        ...state,
        listOfRecipe: action.payload,
        loading: false
      };
    case LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
