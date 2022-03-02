import { connect } from "react-redux";
import { createComment } from "../../actions/comment_actions";
import { fetchAuthor } from "../../actions/user_actions";
import CommentForm from './comment_form';


const mDTP = dispatch => {
  return {
    createComment: comment => dispatch(createComment(comment)),
    fetchCurrentUser: userId => fetchAuthor(userId)
  }
}


export default connect(null, mDTP)(CommentForm)