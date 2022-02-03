import { connect } from "react-redux";
import { openModal } from "../../actions/modal_actions";
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
    openModal: () => dispatch(openModal('post'))
  }
}

export const ProfileContainer = connect(mSTP, mDTP)(Profile)
