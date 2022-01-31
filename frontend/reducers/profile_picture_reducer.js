import { RECEIVE_PROFILE_PICTURE } from "../actions/profile_picture_actions";

const ProfilePictureReducer = (state, action) => {

  Object.freeze(state)
  let nextState = Object.assign({}, state)

  switch(action.type) {

    case RECEIVE_PROFILE_PICTURE:
      nextState[action.picture.id] = action.picture;

  }
}

export default ProfilePictureReducer;