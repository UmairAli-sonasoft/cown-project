import React from 'react'
import { connect } from 'react-redux'
import './collection-page.styles.scss'

import { selectCollection } from '../../redux/shop/shopSelector'
import CollectionItem from '../../component/collection-Item/CollectionItem'

const CollectionPage = ({ collection }) => {
  const { title, items } = collection
  console.log(collection)
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {
          items.map(item => <CollectionItem key={item.id} item={item} />
          )}
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.categoryId)(state)
})


export default connect(mapStateToProps)(CollectionPage)
