import shopActionType from './shopActionType'
import { firestore, convertSnapshotToMap } from '../../component/firebase/firebase.utils'


export const fetchCollectionStart = () => ({
  type: shopActionType.FETCH_COLLECTION_START,
})

export const fetchCollectionSuccessful = mapCollection => ({
  type: shopActionType.FETCH_COLLECTION_SUCCESSFUL,
  payload: mapCollection
})

export const fetchCollectionFailure = (error) => ({
  type: shopActionType.FETCH_COLLECTION_FAILURE,
  payload: error
})

export const fetchCollectionStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection('collections')
    dispatch(fetchCollectionStart())
    collectionRef
      .get()
      .then(snapshot => {
        const mapCollection = convertSnapshotToMap(snapshot)
        dispatch(fetchCollectionSuccessful(mapCollection))
      }).catch(error => dispatch(fetchCollectionFailure(error.message)))
  }
}

