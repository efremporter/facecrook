import { connect } from "react-redux";
import { fetchAuthor } from "../../actions/user_actions";
import FriendsIndex from "./friends_index";

const mSTP = (state, ownProps) => {
  return {
    friends: Object.values(state.entities.friends)
  }
}

const mDTP = dispatch => {
  return {
    fetchUser: userId => fetchAuthor(userId)
  }
}

export default connect(mSTP, mDTP)(FriendsIndex)

