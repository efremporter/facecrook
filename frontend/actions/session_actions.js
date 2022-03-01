import { postUser, postSession, deleteSession } from '../utils/session_utils'
import { closeModal } from './modal_actions'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const REMOVE_SESSION_ERRORS = 'REMOVE_SESSION_ERRORS';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

const receiveCurrentUser = user => {
  console.log(user)
  return {
    type: RECEIVE_CURRENT_USER,
    user
  }
}

const receiveSessionErrors = errors => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  }
}

const removeSessionErrors = () => {
  return {
    type: REMOVE_SESSION_ERRORS
  }
}


const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER
  }
}

export const createNewUser = formUser => dispatch => {
  return postUser(formUser)
  .then( user => {
    dispatch(closeModal());
    dispatch(receiveCurrentUser(user))
  })
  .catch(errors => dispatch(receiveSessionErrors(errors.responseJSON)))
}

export const login = formUser => dispatch => {
  return postSession(formUser)
  .then( user => {
    dispatch(closeModal())
    dispatch(receiveCurrentUser(user))
  })
  .catch(errors => dispatch(receiveSessionErrors(errors.responseJSON)))
}

export const logout = () => dispatch => {
  return deleteSession()
  .then( () => dispatch(logoutCurrentUser()))
}