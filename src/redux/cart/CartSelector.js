import { createSelector } from 'reselect';

const selectCart = state => state.cart

export const selectCartItems = createSelector(
  [selectCart],
  (cart => cart.cartItems)
)

export const selectHidden = createSelector(
  [selectCart],
  cart => cart.hidden
)

export const selectCartItemQuantity = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((accumulator, cartItems) => (
    accumulator + cartItems.quantity
  ), 0)
)

export const selectTotalCartAmount = createSelector(
  [selectCartItems],
  (cartItems => cartItems.reduce(
    (accumulator, cartItem) => (accumulator + cartItem.quantity * cartItem.price), 0))
)