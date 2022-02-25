import { connect } from "react-redux";
import { deletePost, fetchPosts } from "../../actions/post_actions";
import { fetchAuthor } from "../../actions/user_actions";
import PostIndex from "./post_index";

const mSTP = state => {
  return {
    posts: Object.values(state.entities.posts).reverse(),
    currentUser: state.session.currentUser
  }
}

const mDTP = dispatch => {
  return {
    fetchPosts: profileId => dispatch(fetchPosts(profileId)),
    fetchAuthor: authorId => fetchAuthor(authorId),
    deletePost: postId => dispatch(deletePost(postId))
  }
}

export default connect(mSTP, mDTP)(PostIndex)