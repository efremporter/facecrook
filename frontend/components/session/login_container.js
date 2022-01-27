import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import Login from './login';

const mDTP = dispatch => {
  return {
    login: user => dispatch(login(user)),
    logInGuest: () => dispatch(login({email: 'guest@user.com', password: 'NobodyWillGuessThisPassword17'}))
  }
}

export default connect(null, mDTP)(Login)