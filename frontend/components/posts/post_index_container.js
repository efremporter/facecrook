import { connect } from "react-redux";
import { clearComments, deleteComment, fetchComments } from "../../actions/comment_actions";
import { clearLikes, fetchPostLikes } from "../../actions/like_actions";
import { deletePost, fetchPosts } from "../../actions/post_actions";
import { fetchAuthor } from "../../actions/user_actions";
import PostIndex from "./post_index";

const mSTP = state => {
  return {
    posts: Object.values(state.entities.posts).reverse(),
    currentUser: state.session.currentUser,
    comments: Object.values(state.entities.comments),
    likes: Object.values(state.entities.likes)
  }
}

const mDTP = dispatch => {
  return {
    fetchPosts: profileId => dispatch(fetchPosts(profileId)),
    fetchAuthor: authorId => fetchAuthor(authorId),
    deletePost: postId => dispatch(deletePost(postId)),
    fetchComments: postId => dispatch(fetchComments(postId)),
    clearComments: () => dispatch(clearComments()),
    deleteComment: commentId => dispatch(deleteComment(commentId)),
    clearLikes: () => dispatch(clearLikes()),
    fetchLikes: postId => dispatch(fetchPostLikes(postId))
  }
}

export default connect(mSTP, mDTP)(PostIndex)