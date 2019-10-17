import shopActionType from "./shopActionType";

const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  error: undefined
}

const shopReducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case shopActionType.FETCH_COLLECTION_START:
      return {
        ...state,
        isFetching: true
      }

    case shopActionType.FETCH_COLLECTION_SUCCESSFUL:
      return {
        ...state,
        isFetching: false,
        collections: action.payload
      }

    case shopActionType.FETCH_COLLECTION_FAILURE:
      return {
        ...state,
        error: action.payload
      }

    default:
      return state;
  }
}

export default shopReducer