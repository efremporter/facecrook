import { connect } from "react-redux"
import { openModal } from "../../actions/modal_actions"
import PostForm from "./post_form"

const mSTP = state => {
  return {
    modal: state.ui.modal
  }
}

const mDTP = dispatch => {
  return {
    createPost: post => dispatch(createPost(post)),
    openModal: () => dispatch(openModal('post'))
  }
}

export default connect(mSTP, mDTP)(PostForm)