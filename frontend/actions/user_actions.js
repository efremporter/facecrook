import * as UserUtils from "../utils/user_utils"
export const RECEIVE_USER = 'RECEIVE_USER'

const receiveUser = user => {
  return {
    type: RECEIVE_USER,
    user
  }
}

export const fetchUser = userId => dispatch => {
  UserUtils.fetchUser(userId)
  .then( user => dispatch(receiveUser(user)))
}