import { handleActions } from "redux-actions";
import { selectSublevelSuccess, getCategoriesSuccess } from '../actions/categoriesAction';

const defaultState = {
  data: null,
  categories: [],
  error: null
};

const reducer = handleActions(
  {
    [selectSublevelSuccess]: ( state, { payload: { data }}) => ({
      ...state,
      data: data
    }),
    [getCategoriesSuccess]: (state, { payload: { categories }}) => {
      return {
        ...state,
        categories
      }
    }
  },
  defaultState
);

export default reducer;
