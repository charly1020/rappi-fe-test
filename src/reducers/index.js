import { combineReducers } from "redux";
import categories from "./categoriesReducer";
import products from "./productsReducer";
import cart from './cartReducer';
import filter from './filterReducer';
import sort from './sortReducer';

const reducers = combineReducers({
  categories,
  products,
  cart,
  filter,
  sort
});

export default reducers;
