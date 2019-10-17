import React from 'react';
import { Route } from 'react-router-dom'
import { connect } from 'react-redux';

import { fetchCollectionStartAsync } from '../../redux/shop/shopAction'
import CollectionOverviewContainer from '../../component/collectionOverview/CollectionOverview.container'
import CollectionPageContainer from '../collection/CollectionPage.container';


class Shop extends React.Component {

  componentDidMount() {
    const { fetchCollectionStartAsync } = this.props
    fetchCollectionStartAsync()
  }

  render() {

    const { match } = this.props

    return (
      <div>
        <div className="shop-page" >
          <Route exact path={`${match.path}`}
            component={CollectionOverviewContainer} />

          <Route path={`${match.path}/:categoryId`}
            component={CollectionPageContainer} />
        </div>
      </div>
    )
  }
}
const mapDispatchToProps = dispatch => ({
  fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync())
})

export default connect(null, mapDispatchToProps)(Shop)