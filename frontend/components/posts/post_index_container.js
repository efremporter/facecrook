import { connect } from "react-redux";
import { fetchPosts } from "../../actions/post_actions";
import PostIndex from "./post_index";

const mSTP = state => {
  return {
    posts: Object.values(state.entities.posts)
  }
}

const mDTP = dispatch => {
  return {
    fetchPosts: authorId => dispatch(fetchPosts(authorId)),
  }
}

export default connect(mSTP, mDTP)(PostIndex)