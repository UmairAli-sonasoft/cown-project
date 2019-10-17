import toggleCartHidden from './CartActionType'

const hiddenAndShowCart = () => ({
  type: toggleCartHidden.TOGGLE_CART_HIDDEN
})

export const addCartItem = item => ({
  type: toggleCartHidden.ADD_ITEM_INTO_CART,
  payload: item

})

export const removeItem = item => ({
  type: toggleCartHidden.REMOVE_ITEM,
  payload: item
})

export const removeItemIntoCart = item => ({
  type: toggleCartHidden.REMOVE_ITEM_INTO_CART,
  payload: item
})


export default hiddenAndShowCart

