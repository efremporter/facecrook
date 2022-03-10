import { connect } from "react-redux";
import { createFriend, deleteFriend, getFriends } from "../../actions/friend_actions";
import FriendRequests from "./friend_requests";


const mSTP = state => {
  return {
    currentUserId: state.session.currentUser.id,
    friends: Object.values(state.entities.friends)
  }
}

const mDTP = dispatch => {
  return {
    getFriends: id => dispatch(getFriends(id)),
    createFriend: friend => dispatch(createFriend(friend)),
    deleteFriend: id => dispatch(deleteFriend(id))
  }
}

export default connect(mSTP, mDTP)(FriendRequests)