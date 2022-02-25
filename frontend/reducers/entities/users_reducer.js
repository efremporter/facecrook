import { RECEIVE_USER } from "../../actions/user_actions";

const UsersReducer = (state={}, action) => {

  Object.freeze(state)

  switch(action.type) {

    case RECEIVE_USER:
      let nextState = {}
      nextState[action.user.id] = action.user
      return nextState
      
    default:
      return state
  }
}

export default UsersReducer