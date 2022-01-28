import { connect } from "react-redux";
import { createPost, fetchPosts } from "../../actions/post_actions";
import { fetchUser } from "../../actions/user_actions";
import Profile from "./profile";

const mSTP = (state, ownProps) => {
  return {
    userId: ownProps.match.params.userId,
    posts: Object.values(state.entities.posts)
  }
}

const mDTP = dispatch => {
  return {
    createPost: post => dispatch(createPost(post)),
    fetchUser: userId => dispatch(fetchUser(userId))
  }
}

export default connect(mSTP, mDTP)(Profile)