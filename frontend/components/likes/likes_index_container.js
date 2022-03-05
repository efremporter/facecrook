import { connect } from "react-redux";
import LikesIndex from "./likes_index";
import { createLike, fetchPostLikes, removeLike, clearLikes } from "../../actions/like_actions";


const mSTP = state => {
  return {
    likes: Object.values(state.entities.likes)
  }
}

const mDTP = dispatch => {
  return {
    fetchLikes: postId => dispatch(fetchPostLikes(postId)),
    createLike: like => dispatch(createLike(like)),
    removeLike: id => dispatch(removeLike(id))
  }
}

export default connect(mSTP, mDTP)(LikesIndex)