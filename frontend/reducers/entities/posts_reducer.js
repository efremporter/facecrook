import { RECEIVE_POST, RECEIVE_POSTS, REMOVE_POST, CLEAR_POSTS } from "../../actions/post_actions";

const PostsReducer = (state={}, action) => {

  Object.freeze(state);
  let nextState = Object.assign({}, state)

  switch(action.type) {

    case RECEIVE_POSTS:
      nextState = Object.assign({}, action.posts)
      return nextState

    case RECEIVE_POST:
      nextState[action.post.id] = action.post
      return nextState

    case REMOVE_POST:
      delete nextState[action.postId]
      return nextState

    case CLEAR_POSTS:
      return {}

    default:
      return state
  }
}

export default PostsReducer