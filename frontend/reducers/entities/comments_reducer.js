import { REMOVE_COMMENT, RECEIVE_COMMENTS, RECEIVE_COMMENT, CLEAR_COMMENTS } from '../../actions/comment_actions';

const CommentsReducer = (state={}, action) => {

  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch(action.type) {

    case RECEIVE_COMMENTS:
      nextState = Object.assign(nextState, action.comments)
      return nextState

    case RECEIVE_COMMENT:
      nextState[action.comment.id] = action.comment;
      return nextState;

    case REMOVE_COMMENT:
      delete nextState[action.comment.id];
      return nextState;

    case CLEAR_COMMENTS: 
      return {};

    default: 
      return state;
  }
}

export default CommentsReducer;