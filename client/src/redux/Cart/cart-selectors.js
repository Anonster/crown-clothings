import { createSelector } from "reselect";

const selectCart = (state) => state.cart;
export const selectCartItem = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItem],
  (cartItems) =>
    cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);
export const selectCartTotal = createSelector([selectCartItem], (cartItems) =>
  cartItems.reduce(
    (accumalatedQuanity, cartItems) =>
      accumalatedQuanity + cartItems.quantity * cartItems.price,
    0
  )
);
