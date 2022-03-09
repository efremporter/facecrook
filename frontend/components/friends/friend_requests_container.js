import { connect } from "react-redux";
import { getFriendStatus } from "../../actions/friend_actions";
import FriendRequests from "./friend_requests";

const mSTP = state => {
  return {
    friendId: state.session.currentUser.id,
  }
}

const mDTP = dispatch => {
  return {
    getFriendStatus: (userId, friendId) => getFriendStatus(userId, friendId)
  }
}

export default connect(mSTP, mDTP)(FriendRequests)