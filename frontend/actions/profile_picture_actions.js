import * as ProfilePictureActions from '../utils/profile_picture_utils'
export const RECEIVE_PROFILE_PICTURE = "RECEIVE_PROFILE_PICTURE";

const receiveProfilePicture = picture => {
  return {
    type: RECEIVE_PROFILE_PICTURE,
    picture
  }
}

export const fetchProfilePicture = userId => dispatch => {
  return ProfilePictureActions.fetchProfilePicture(userId)
  .then(picture => dispatch(receiveProfilePicture(picture)))
}

export const createProfilePicture = picture => dispatch => {
  return ProfilePictureActions.createProfilePicture(picture)
  .then(picture => dispatch(receiveProfilePicture(picture)))
}

export const updateProfilePicture = picture => dispatch => {
  return ProfilePictureActions.updateProfilePicture(picture)
  .then(picture => dispatch(receiveProfilePicture(picture)))
}
