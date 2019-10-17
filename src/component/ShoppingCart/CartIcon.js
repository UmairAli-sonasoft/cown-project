import React from 'react'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import './shoping-cart.scss'
import hiddenAndShowCart from '../../redux/cart/CartAction'

import { connect } from 'react-redux'
import {selectCartItemQuantity} from '../../redux/cart/CartSelector'
import { createStructuredSelector } from 'reselect'

function CartIcon({ hiddenAndShowCart, itemCount }) {
  return (
    <div className="cart-icon" onClick={hiddenAndShowCart}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  )
}

const mapDispatchTopProps = dispatch => ({
  hiddenAndShowCart: () => { dispatch(hiddenAndShowCart()) }
})

const mapStateToProps = createStructuredSelector (
  {
    itemCount: selectCartItemQuantity
  }
)



export default connect(mapStateToProps, mapDispatchTopProps)(CartIcon)