import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { createNewUser, login } from '../../actions/session_actions';
import SignUp from './signup'

const mDTP = dispatch => {
  return {
    createNewUser: formUser => dispatch(createNewUser(formUser)),
    logInGuest: () => dispatch(login({email: 'guestuser@gmail.com', password: 'NobodyWillGuessThisPassword17'})),
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(null, mDTP)(SignUp)