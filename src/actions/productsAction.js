import { createActions } from 'redux-actions';
import { getProducts } from '../services/apiService';

const {
  getProductsSuccess
} = createActions({
  GET_PRODUCTS_SUCCESS: ({products}) => ({products})
});

const getProductList = () => {
  return async dispatch => {
    const { data } = await getProducts();
    const products = data.products.map(product => {
      product.priceVal = Number(product.price.replace('$','').replace(',',''));
      return product;
    })
    dispatch(getProductsSuccess({products}));
  }
}

export {
  getProductsSuccess,
  getProductList
}