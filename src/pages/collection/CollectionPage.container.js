import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'
import WithSpinner from '../../component/withSpinner/WithSpinner'
import { selectIsCollectionLoaded } from '../../redux/shop/shopSelector';
import CollectionPage from './CollectionPage';

export const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCollectionLoaded(state)
})

const CollectionPageContainer = compose(
  connect(mapStateToProps), WithSpinner
)(CollectionPage)

export default CollectionPageContainer