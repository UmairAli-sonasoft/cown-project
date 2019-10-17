export const addItemToCart = (cartItems, newItemsAddIntoCart) => {
  const existingCartItem = cartItems.find(cartItem =>
    cartItem.id === newItemsAddIntoCart.id
  )

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === newItemsAddIntoCart.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    )
  }
  return [...cartItems, { ...newItemsAddIntoCart, quantity: 1 }]
}


export const decreaseItemIntoCart = (cartItems, removeItemIntoCart) => {
  const existingCartItem = cartItems.find(cartItem =>
    cartItem.id === removeItemIntoCart.id
  )

  console.log('checking the Existing Cart Item', existingCartItem)

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== removeItemIntoCart.id)
  }

  return cartItems.map(cartItem =>
    cartItem.id === removeItemIntoCart.id ?
      { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem

  )
}