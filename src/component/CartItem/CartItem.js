import React from 'react'
import "./cart-item.scss";

export default function CartItem({ item }) {
  const { quantity, name, price, imageUrl } = item
  console.log(item)
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="item" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price"> ${price} x {quantity}</span>
      </div>
    </div>
  )
}

