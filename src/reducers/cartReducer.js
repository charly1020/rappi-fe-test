import { handleActions } from "redux-actions";
import {
  addItemSuccess,
  increaseItemCantSuccess,
  removeItemSuccess,
  buySuccess
} from "../actions/cartActions";
import { updateCartInLocalStorage } from "../helpers/localStorageHelper";

const defaultState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  errors: null
};

const reducer = handleActions(
  {
    [addItemSuccess]: ({ cart }, { payload: { item } }) => {
      const current =
        cart.length > 0 &&
        cart.find(cartItem => {
          return cartItem.item.id === item.id;
        });
      if (current) {
        current.cant++;
      } else {
        const newItem = { item, cant: 1 };
        cart.push(newItem);
        updateCartInLocalStorage(cart);
      }
      return {
        cart: [...cart]
      };
    },
    [increaseItemCantSuccess]: ({ cart }, { payload: { itemId } }) => {
      const current = cart.find(cartItem => {
        return cartItem.item.id === itemId;
      });
      current.cant++;
      updateCartInLocalStorage(cart);
      return {
        cart: [...cart]
      };
    },
    [removeItemSuccess]: ({ cart }, { payload: { itemId } }) => {
      const current = cart.find(cartItem => {
        return cartItem.item.id === itemId;
      });

      if (current.cant > 1) {
        current.cant--;
      } else {
        const pos = cart.map(item => item.item.id).indexOf(itemId);
        cart.splice(pos, 1);
      }

      updateCartInLocalStorage(cart);
      return {
        cart: [...cart]
      };
    },
    [buySuccess]: ({ cart }) => {
      cart = [];
      updateCartInLocalStorage(cart);
      return {
        cart: [...cart]
      };
    }
  },
  defaultState
);

export default reducer;
