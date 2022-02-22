import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import Login from './login';
import { openModal } from '../../actions/modal_actions';

const mSTP = state => {
  return {
    errors: state.errors.session
  }
}

const mDTP = dispatch => {
  return {
    login: user => dispatch(login(user)),
    logInGuest: () => dispatch(login({email: 'guestuser@gmail.com', password: 'NobodyWillGuessThisPassword17'})),
    openModal: () => dispatch(openModal('signup'))
  }
}

export default connect(mSTP, mDTP)(Login)