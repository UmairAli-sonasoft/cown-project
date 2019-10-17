import React from 'react'
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'

import CustomButton from '../custom-button/CustomButton'
import hiddenAndShowCart from '../../redux/cart/CartAction'
import { selectCartItems } from '../../redux/cart/CartSelector'


import './cart-dropdown.styles.scss'
import CartItem from "../CartItem/CartItem";
import { createStructuredSelector } from 'reselect'


function CartDropdown({ cartItems, history, dispatch }) {
  return (
    <div className="cart-dropdown" >
      <div className="cart-item" />
      {cartItems.length ?
        cartItems.map(cartItem =>
          <CartItem item={cartItem} key={cartItem.id} />)
        : <span className="empty-message"> your card is empty </span>
      }

      <CustomButton onClick={() => {
        history.push('/checkout')
        dispatch(hiddenAndShowCart())
      }}> View Items </CustomButton>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})


export default withRouter(connect(mapStateToProps)(CartDropdown))
