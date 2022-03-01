import { connect } from "react-redux";
import { fetchComments } from "../../actions/comment_actions";
import CommentIndex from "./comments_index";
import { fetchAuthor } from "../../actions/user_actions";
const mSTP = state => {
  return {
    comments: Object.values(state.entities.comments)
  }
}

const mDTP = dispatch => {
  return {
    fetchComments: postId => dispatch(fetchComments(postId)),
    fetchAuthor: authorId => fetchAuthor(authorId)
  }
}


export default connect(mSTP, mDTP)(CommentIndex)