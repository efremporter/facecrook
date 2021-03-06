import { RECEIVE_FRIENDS, RECEIVE_FRIEND, REMOVE_FRIEND, CLEAR_FRIENDS } from "../../actions/friend_actions";

const FriendsReducer = (state={}, action) => {

  Object.freeze(state)
  let nextState = Object.assign({}, state)

  switch(action.type) {

    case RECEIVE_FRIENDS:
      return Object.assign({}, action.friends)

    case RECEIVE_FRIEND:
      nextState[action.friend.id] = action.friend
      return nextState;

    case REMOVE_FRIEND:
      delete nextState[action.id]
      return nextState;

    case CLEAR_FRIENDS:
      return {}

    default:
      return state
  }
}

export default FriendsReducer