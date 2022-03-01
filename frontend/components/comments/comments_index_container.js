import { connect } from "react-redux";
import { fetchComments } from "../../actions/comment_actions";
import CommentIndex from "./comments_index";

const mSTP = state => {
  return {
    comments: Object.values(state.entities.comments)
  }
}

const mDTP = dispatch => {
  return {
    fetchComments: postId => dispatch(fetchComments(postId))
  }
}


export default connect(mSTP, mDTP)(CommentIndex)