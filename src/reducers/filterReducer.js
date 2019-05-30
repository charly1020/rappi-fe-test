import { handleActions } from "redux-actions";
import { pushFilterSuccess } from "../actions/filterActions";

const defaultState = {
  data: { available: "all", quantity: "", priceFrom: "", priceTo: "", itemName: "" },
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
