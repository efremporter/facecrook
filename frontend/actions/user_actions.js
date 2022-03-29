import * as UserUtils from "../utils/user_utils";
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';
export const REMOVE_USERS = 'REMOVE_USERS';

const receiveUsers = users => {
  return {
    type: RECEIVE_USERS,
    users
  }
}

const receiveUser = user => {
  return {
    type: RECEIVE_USER,
    user
  }
}

const removeUsers = () => {
  return {
    type: REMOVE_USERS
  }
}

export const fetchUsers = () => dispatch => {
  return UserUtils.fetchUsers()
  .then(users => dispatch(receiveUsers(users)))
}

export const fetchUser = userId => dispatch => {
  return UserUtils.fetchUser(userId)
  .then(user => dispatch(receiveUser(user)))
}

export const updateUser = user => dispatch => {
  return UserUtils.patchUser(user)
  .then(user => dispatch(receiveUser(user)))
  // .catch(errors => dispatch())
}

export const fetchAuthor = authorId  => {
  return UserUtils.fetchUser(authorId)
}

export const clearUsers = () => dispatch => {
  dispatch(removeUsers())
}