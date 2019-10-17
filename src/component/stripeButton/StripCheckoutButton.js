import React from 'react'
import StripeCheckout from 'react-stripe-checkout'


export default function StripCheckoutButton({ price }) {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_fusDJgOdoTY6DlANuigQV4YW00PZv0RxAe'

  const onToken = (token) => {
    console.log(token)
    alert('Payment has been completed successfully')
  }

  return (
    <StripeCheckout
      label="Pay Now."
      name="Crown Clothing Ltd."
      shippingAddress
      billingAddress
      image='http://svgshare.com/i/CUz.svg'
      description={`Your Total Amount is ${price}`}
      panelLabel="Pay Now"
      amount={priceForStripe}
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}
