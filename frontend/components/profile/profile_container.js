import { connect } from "react-redux";
import { openModal } from "../../actions/modal_actions";
import { clearPosts } from "../../actions/post_actions";
import { clearUsers, fetchUser, updateUser } from "../../actions/user_actions";
import { clearFriends, getFriends } from "../../actions/friend_actions"
import Profile from "./profile";

const mSTP = (state, ownProps) => {
  const userId = ownProps.match.params.userId
  return {
    user: state.entities.users[userId],
    userId: parseInt(userId),
    currentUser: state.session.currentUser,
    modal: state.ui.modal,
    friends: Object.values(state.entities.friends)
  }
}

const mDTP = dispatch => {
  return {
    fetchUser: userId => dispatch(fetchUser(userId)),
    openModal: () => dispatch(openModal('post')),
    updateUser: user => dispatch(updateUser(user)),
    clearUsers: () => dispatch(clearUsers()),
    clearPosts: () => dispatch(clearPosts()),
    fetchFriends: id => dispatch(getFriends(id)),
    clearFriends: () => dispatch(clearFriends())
  }
}

export default connect(mSTP, mDTP)(Profile)
