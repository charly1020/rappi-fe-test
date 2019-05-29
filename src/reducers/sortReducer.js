import { handleActions } from "redux-actions";
import { pushSortSuccess } from "../actions/sortActions";

const defaultState = {
  data: {sortBy: ''},
  errors: null
};

const reducer = handleActions(
  {
    [pushSortSuccess]: (state, { payload: { sort } }) => {
      return {
        data: {
          ...state.data,
          ...sort
        }
      };
    }
  },
  defaultState
);

export default reducer;
