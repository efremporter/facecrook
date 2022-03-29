import { connect } from "react-redux";
import { fetchUsers } from "../../actions/user_actions";
import { getFriends } from "../../actions/friend_actions";
import SuggestedFriends from "./suggested_friends";

const mSTP = state => {
  let friends = Object.values(state.entities.friends);
  let friendsByFriendId = {};
  let friendsByUserId = {};
  friends.forEach(friend => {
    friendsByFriendId[friend.friendId] = friend;
    friendsByUserId[friend.userId] = friend;
  })
  return {
    users: Object.values(state.entities.users),
    friendsByFriendId,
    friendsByUserId,
    currentUserId: state.session.currentUser.id
  }
}

const mDTP = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    getFriends: () => dispatch(getFriends())
  }
}

export default connect(mSTP, mDTP)(SuggestedFriends)