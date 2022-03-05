import { connect } from "react-redux";
import { fetchAllPosts, deletePost, clearPosts } from "../../actions/post_actions";
import { clearComments, deleteComment, fetchComments } from "../../actions/comment_actions";
import { fetchAuthor } from "../../actions/user_actions";
import { openModal } from "../../actions/modal_actions";
import { clearLikes, fetchPostLikes } from "../../actions/like_actions";
import FeedIndex from "./feed_index";

const mSTP = state => {
  return {
    posts: Object.values(state.entities.posts).reverse(),
    currentUser: state.session.currentUser,
    modal: state.ui.modal,
    comments: Object.values(state.entities.comments),
    likes: Object.values(state.entities.likes)
  }
}

const mDTP = dispatch => {
  return {
    fetchAllPosts: () => dispatch(fetchAllPosts()),
    fetchAuthor: authorId => fetchAuthor(authorId),
    deletePost: postId => dispatch(deletePost(postId)),
    openModal: () => dispatch(openModal('post')),
    clearPosts: () => dispatch(clearPosts()),
    fetchComments: postId => dispatch(fetchComments(postId)),
    clearComments: () => dispatch(clearComments()),
    deleteComment: commentId => dispatch(deleteComment(commentId)),
    clearLikes: () => dispatch(clearLikes()),
    fetchLikes: postId => dispatch(fetchPostLikes(postId))
  }
}

export default connect(mSTP, mDTP)(FeedIndex)