import { RECEIVE_LIKES, RECEIVE_LIKE, REMOVE_LIKE, CLEAR_LIKES } from "../../actions/like_actions";


const LikesReducer = (state={}, action) => {
  Object.freeze(state)

  let nextState = Object.assign({}, state)

  switch(action.type) {
    
    case RECEIVE_LIKES:
      nextState = Object.assign(nextState, action.likes)
      return nextState

    case RECEIVE_LIKE:
      nextState[action.like.id] = action.like
      return nextState

    case REMOVE_LIKE:
      delete nextState[action.id]
      return nextState

    case CLEAR_LIKES:
      return {};

    default:
      return state;
  }
}

export default LikesReducer