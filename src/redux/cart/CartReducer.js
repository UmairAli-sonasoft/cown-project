import toggleCartHidden from './CartActionType'
import { addItemToCart } from './Cart.utils'
import { decreaseItemIntoCart } from './Cart.utils'

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case toggleCartHidden.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      }

    case toggleCartHidden.ADD_ITEM_INTO_CART:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      }

    case toggleCartHidden.REMOVE_ITEM:
      return {
        ...state,
        cartItems: decreaseItemIntoCart(state.cartItems, action.payload)
      }

    case toggleCartHidden.REMOVE_ITEM_INTO_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem.id !== action.payload.id
        )
      }

    default:
      return state;
  }
}
export default cartReducer