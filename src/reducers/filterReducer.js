import { handleActions } from "redux-actions";
import { pushFilterSuccess } from "../actions/filterActions";

const defaultState = {
  data: { available: "all", quantity: "", priceFrom: "", priceTo: "" },
  errors: null
};

const reducer = handleActions(
  {
    [pushFilterSuccess]: (state, { payload: { filter } }) => {
      return {
        data: {
          ...state.data,
          ...filter
        }
      };
    }
  },
  defaultState
);

export default reducer;
