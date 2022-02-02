import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import PostModal from "./post_modal";

const mSTP = state => {
  return {
    modal: state.ui.modal
  };
};

const mDTP = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mSTP, mDTP)(PostModal);
