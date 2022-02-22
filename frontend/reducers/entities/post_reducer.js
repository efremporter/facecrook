import { RECEIVE_POST, RECEIVE_POSTS, DELETE_POST } from "../../actions/post_actions";

const PostsReducer = (state={}, action) => {

  Object.freeze(state);
  let nextState = Object.assign({}, state)

  switch(action.type) {

    case RECEIVE_POSTS:
      nextState = Object.assign(nextState, action.posts)
      return nextState

    case RECEIVE_POST:
      nextState[action.post.id] = action.post
      return nextState

    case DELETE_POST:
      delete nextState[action.postId]
      return nextState

    default:
      return state
  }
}

export default PostsReducer