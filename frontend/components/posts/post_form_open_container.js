import { connect } from "react-redux"
import { closeModal, openModal } from "../../actions/modal_actions"
import { createPost } from "../../actions/post_actions"
import PostFormOpen from "./post_form"

const mSTP = state => {
  return {
    modal: state.ui.modal
  }
}

const mDTP = dispatch => {
  return {
    createPost: post => dispatch(createPost(post)),
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(mSTP, mDTP)(PostFormOpen)