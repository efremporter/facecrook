import { connect } from "react-redux";
import { fetchAuthor } from "../../actions/user_actions";
import FriendsIndexMini from "./friends_index_mini";

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

export default connect(mSTP, mDTP)(FriendsIndexMini)