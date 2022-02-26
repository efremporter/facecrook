import { connect } from "react-redux";
import { fetchAllPosts, deletePost } from "../../actions/post_actions";
import { fetchAuthor } from "../../actions/user_actions";
import FeedIndex from "./feed_index";

const mSTP = state => {
  return {
    posts: Object.values(state.entities.posts).reverse(),
    currentUser: state.session.currentUser
  }
}

const mDTP = dispatch => {
  return {
    fetchAllPosts: () => dispatch(fetchAllPosts()),
    fetchAuthor: authorId => fetchAuthor(authorId),
    deletePost: postId => dispatch(deletePost(postId))
  }
}

export default connect(mSTP, mDTP)(FeedIndex)