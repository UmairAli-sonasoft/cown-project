import React from 'react';
import './collection-item.styles.scss';
import CustomButton from '../custom-button/CustomButton'
import  { addCartItem } from '../../redux/cart/CartAction'
import { connect } from 'react-redux'

 function CollectionItem({item, addCartItem}) {

   const {name, imageUrl, price} = item 
   
   return (
    <div className='collection-item '>
      <div className="image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>

        <CustomButton inverted onClick={() => addCartItem(item)}>ADD TO CART</CustomButton>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  addCartItem: item => {dispatch(addCartItem(item))}
})

export default connect(null, mapDispatchToProps)(CollectionItem)