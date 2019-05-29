export const updateCartInLocalStorage = cart => {
  localStorage.clear();
  localStorage.setItem("cart", JSON.stringify(cart));
};
