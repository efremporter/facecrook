import { connect } from "react-redux";
import { getFriends } from "../../actions/friend_actions";
import { fetchAuthor } from "../../actions/user_actions";
import FriendProfilePictures from "./friend_profile_pictures";

const mSTP = state => {
  return {
    friends: Object.values(state.entities.friends)
  }
}

const mDTP = dispatch => {
  return {
    fetchUser: userId => fetchAuthor(userId)
  }
}

export default connect(null, mDTP)(FriendProfilePictures)