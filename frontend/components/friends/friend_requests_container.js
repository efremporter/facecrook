import { connect } from "react-redux";
import { createFriend, deleteFriend, getFriends, updateFriend } from "../../actions/friend_actions";
import FriendRequests from "./friend_requests";

const mSTP = state => {
  return {
    currentUserId: state.session.currentUser.id,
    friends: Object.values(state.entities.friends)
  }
}

const mDTP = dispatch => {
  return {
    getFriends: userId => dispatch(getFriends(userId)),
    createFriend: friend => dispatch(createFriend(friend)),
    updateFriend: friend => dispatch(updateFriend(friend)),
    deleteFriend: id => dispatch(deleteFriend(id))
  }
}

export default connect(mSTP, mDTP)(FriendRequests)