import { createActions } from "redux-actions";

const { pushSortSuccess } = createActions({
  PUSH_SORT_SUCCESS: sort => ({ sort })
});

const pushSort = sortData => {
  return dispatch => {
    dispatch(pushSortSuccess(sortData));
  };
};

export { pushSort, pushSortSuccess };
