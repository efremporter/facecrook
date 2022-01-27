import { connect } from "react-redux";
import { createPost, fetchPosts } from "../../actions/post_actions";
import { fetchUser } from "../../actions/user_actions";
import Profile from "./profile";

const mSTP = (state, ownProps) => {
  console.log(ownProps.match.params.userId)
  return {
    userId: ownProps.match.params.userId,
    state
  }
}

const mDTP = dispatch => {
  return {
    fetchPosts: authorId => dispatch(fetchPosts(authorId)),
    createPost: post => dispatch(createPost(post)),
    fetchUser: userId => dispatch(fetchUser(userId))
  }
}

export default connect(mSTP, mDTP)(Profile)