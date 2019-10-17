import { createSelector } from 'reselect'

const selectShop = state => state.shop

export const selectShopCollections = createSelector(
  [selectShop],
  shop => shop.collections
)

export const selectCollectionOverview = createSelector(
  [selectShopCollections],
  collections =>
    collections ? Object.keys(collections).map(key => collections[key]) : []
)

export const selectCollection = selectUrlParam =>
  createSelector(
    [selectShopCollections],
    collections => collections[selectUrlParam]
  )

export const selectIsFetching = createSelector(
  [selectShop],
  shop => shop.isFetching
)

export const selectIsCollectionLoaded = createSelector(
  [selectCollectionOverview],
  shop => !!shop.collections
)

