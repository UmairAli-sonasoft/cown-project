import { connect } from 'react-redux'
import { compose } from 'redux'

import { createStructuredSelector } from 'reselect'
import { selectIsFetching } from '../../redux/shop/shopSelector'
import CollectionOverview from './CollectionOverview'
import WithSpinner from '../withSpinner/WithSpinner'

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsFetching
})

const CollectionOverviewContainer = compose(
  connect(mapStateToProps), WithSpinner
)(CollectionOverview)

export default CollectionOverviewContainer