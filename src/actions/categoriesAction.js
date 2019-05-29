import { createActions } from 'redux-actions';
import { getCategories } from '../services/apiService'

const {
  selectSublevelSuccess,
  getCategoriesSuccess
} = createActions({
  SELECT_SUBLEVEL_SUCCESS: data => ({ data }),
  GET_CATEGORIES_SUCCESS: ({categories}) => ({ categories })
});

const getCategoriesList = () => {
  return async dispatch => {
    const { data } = await getCategories();
    dispatch(getCategoriesSuccess(data));
  }
}

const selectSublevel = (item) => {
  return dispatch => {
    dispatch(selectSublevelSuccess(item));
  }
}

export {
  selectSublevelSuccess,
  selectSublevel,
  getCategoriesSuccess,
  getCategoriesList
}
