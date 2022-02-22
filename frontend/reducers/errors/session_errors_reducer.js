import { OPEN_MODAL } from "../../actions/modal_actions";
import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS, REMOVE_SESSION_ERRORS } from "../../actions/session_actions";

const SessionErrorsReducer = (state={}, action) => {
  Object.freeze(state)

  switch(action.type) {

    case RECEIVE_CURRENT_USER:
      return [];
    
    case OPEN_MODAL: 
      return [];

    case RECEIVE_SESSION_ERRORS:
      return action.errors

    case REMOVE_SESSION_ERRORS:
      return [];

    default:
      return state;
  }
}

export default SessionErrorsReducer;