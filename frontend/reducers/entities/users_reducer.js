import { RECEIVE_USER, REMOVE_USERS } from "../../actions/user_actions";

const UsersReducer = (state={}, action) => {

  Object.freeze(state)

  switch(action.type) {

    case RECEIVE_USER:
      let nextState = {}
      nextState[action.user.id] = action.user
      return nextState

    case REMOVE_USERS:
      return {}
      
    default:
      return state
  }
}

export default UsersReducer