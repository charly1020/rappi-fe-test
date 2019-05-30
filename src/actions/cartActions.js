import { createActions } from 'redux-actions';

const {
  addItemSuccess,
  increaseItemCantSuccess,
  removeItemSuccess,
  buySuccess
} = createActions({
  ADD_ITEM_SUCCESS: item => ({item}),
  INCREASE_ITEM_CANT_SUCCESS: itemId => ({itemId}),
  REMOVE_ITEM_SUCCESS: itemId => ({itemId}),
  BUY_SUCCESS: () => {}
});

const addItemToCart = (item) => {
  return dispatch => {
    dispatch(addItemSuccess(item));
  }
}

const increaseItemCant = (itemId) => {
  return dispatch => {
    dispatch(increaseItemCantSuccess(itemId));
  }
}

const removeItem = (itemId) => {
  return dispatch => {
    dispatch(removeItemSuccess(itemId));
  }
}

const buy = () => {
  return dispatch => {
    dispatch(buySuccess());
  }
}

export {
  addItemToCart,
  addItemSuccess,
  increaseItemCant,
  increaseItemCantSuccess,
  removeItem,
  removeItemSuccess,
  buy,
  buySuccess
}