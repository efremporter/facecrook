import { connect } from "react-redux";
import { fetchUser } from "../../actions/user_actions";
import Profile from "./profile";

const mSTP = (state, ownProps) => {
  const userId = ownProps.match.params.userId
  return {
    user: state.entities.users[userId],
    userId
  }
}

const mDTP = dispatch => {
  return {
    fetchUser: userId => dispatch(fetchUser(userId)),
  }
}

export default connect(mSTP, mDTP)(Profile)