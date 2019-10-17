import React from 'react'
import './collection-overview.styles.scss'

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionOverview } from '../../redux/shop/shopSelector'
import CollectionPreview from "../collection-preview/CollectionPreview";


function CollectionOverview({ collections }) {
  return (
    <div>
      {
        collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />))
      }
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionOverview
})

export default connect(mapStateToProps)(CollectionOverview)
