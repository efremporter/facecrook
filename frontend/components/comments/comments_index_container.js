import { connect } from "react-redux";
import { deleteComment } from "../../actions/comment_actions";
import CommentIndex from "./comments_index";
import { fetchAuthor } from "../../actions/user_actions";

const mDTP = dispatch => {
  return {
    fetchAuthor: authorId => fetchAuthor(authorId),
    deleteComment: id => dispatch(deleteComment(id))
  }
}


export default connect(null, mDTP)(CommentIndex)