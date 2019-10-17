import UserActionTypes from './UserActionTypes'

const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
})

export default setCurrentUser