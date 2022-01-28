import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import Login from './login';
import { openModal } from '../../actions/modal_actions';

const mDTP = dispatch => {
  return {
    login: user => dispatch(login(user)),
    logInGuest: () => dispatch(login({email: 'guest@user.com', password: 'NobodyWillGuessThisPassword17'})),
    openModal: () => dispatch(openModal('signup'))
  }
}

export default connect(null, mDTP)(Login)