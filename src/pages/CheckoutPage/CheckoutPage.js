import React from 'react'
import './CheckoutPage.styles.scss'
import CheckoutItem from '../../component/checkoutItem/CheckoutItem'

import StripCheckoutButton from '../../component/stripeButton/StripCheckoutButton'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItems } from '../../redux/cart/CartSelector'
import { selectTotalCartAmount } from '../../redux/cart/CartSelector'

function CheckoutPage({ cartItems, total }) {
  return (
    <div className="checkout-page">
      <div className="checkout-header">

        <div className="header-block">
          <span> Product </span>
        </div>

        <div className="header-block">
          <span> Description </span>
        </div>

        <div className="header-block">
          <span> Quantity </span>
        </div>

        <div className="header-block">
          <span> Price </span>
        </div>

        <div className="header-block">
          <span> Remove </span>
        </div>
      </div>
      {
        cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)
      }
      <div className="total">
        <span>Total: ${total}</span>
      </div>
      <div className="test-warning">
        *Please use this test credit card for the Test payments*
        <br />
        4242 4242 4242 4242 - exp: 01/20 - cvv:123
      </div>
      
      < StripCheckoutButton price={total} />

    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectTotalCartAmount
})


export default connect(mapStateToProps)(CheckoutPage)





