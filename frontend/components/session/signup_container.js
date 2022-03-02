import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { createNewUser, login } from '../../actions/session_actions';
import SignUp from './signup'

const mSTP = state => {
  return {
    errors: state.errors.session
  }
}

const mDTP = dispatch => {
  return {
    createNewUser: formUser => dispatch(createNewUser(formUser)),
    logInGuest: () => dispatch(login({email: 'guestuser@gmail.com', password: 'NobodyWillGuessThisPassword17'})),
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(mSTP, mDTP)(SignUp)