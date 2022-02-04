import { connect } from "react-redux";
import { fetchPosts } from "../../actions/post_actions";
import FeedIndex from "./feed_index";

const mSTP = state => {
  return {
    allPosts: state.posts
  }
}

const mDTP = dispatch => {
  return {
    fetchPosts: () => dispatch(fetchPosts(1))
  }
}

export default connect(mSTP, mDTP)(FeedIndex)