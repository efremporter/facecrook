import { connect } from "react-redux";
import { createComment } from "../../actions/comment_actions";
import CommentForm from './comment_form';

const mDTP = dispatch => {
  return {
    createComment: comment => dispatch(createComment(comment))
  }
}


export default connect(null, mDTP)(CommentForm)