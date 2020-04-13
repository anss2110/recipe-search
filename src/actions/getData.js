import { SEARCH_RECIPE, FETCH_RECIPE_LIST, LOADING } from './types';
import axios from 'axios';

import { AppKey } from '../AppKey';
import { AppId } from '../AppId';

export const searchRecipe = text => dispatch => {
  dispatch({
    type: SEARCH_RECIPE,
    payload: text
  });
};

export const fetchRecipeList = text => dispatch => {
  axios
    .get(`https://api.edamam.com/search?q=${text}&app_id=${AppId}&app_key=${AppKey}&health=alcohol-free&pork-free&excluded=pork`)
    .then(response =>
      dispatch({
        type: FETCH_RECIPE_LIST,
        payload: response.data.hits
      })
    )
    .catch(err => console.log(err));
};

// export const fetchRecipeDetail = id => dispatch => {
//   axios
//     .get(`https://www.omdbapi.com/?apikey=${APIKey}&i=${id}`)
//     .then(response =>
//       dispatch({
//         type: FETCH_RECIPE_DETAIL,
//         payload: response.data
//       })
//     )
//     .catch(err => console.log(err));
// };

export const setLoading = () => {
  return {
    type: LOADING
  };
};
