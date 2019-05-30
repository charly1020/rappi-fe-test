import { handleActions } from 'redux-actions';
import { getProductsSuccess } from '../actions/productsAction'

const defaulState = {
  data: [],
  error: null
};

const reducer = handleActions({
  [getProductsSuccess]: (state, { payload: { products }}) => {
    return {
      ...state,
      data: products
    }
  }
}, defaulState);

export default reducer;
