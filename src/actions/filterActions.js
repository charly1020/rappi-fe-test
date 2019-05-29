import { createActions } from "redux-actions";

const { pushFilterSuccess } = createActions({
  PUSH_FILTER_SUCCESS: filter => ({ filter })
});

const pushFilter = filterData => {
  return dispatch => {
    dispatch(pushFilterSuccess(filterData));
  };
};

export { pushFilter, pushFilterSuccess };
