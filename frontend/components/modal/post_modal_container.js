import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import { fetchUser } from "../../actions/user_actions";
import PostModal from "./post_modal";

const mSTP = (state, ownProps) => {
  const userId = ownProps.match.params.userId
  if (userId) {
    userId = parseInt(userId)
  }
  return {
    user: state.entities.users[userId],
    userId: userId,
    modal: state.ui.modal
  };
};

const mDTP = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    fetchUser: userId => dispatch(fetchUser(userId)),
  };
};

export default connect(mSTP, mDTP)(PostModal);
