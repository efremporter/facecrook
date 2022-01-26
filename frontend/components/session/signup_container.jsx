import { connect } from 'react-redux';
import { createNewUser, login } from '../../actions/session_actions';
import SignUp from './signup'

const mDTP = dispatch => {
  return {
    createNewUser: formUser => dispatch(createNewUser(formUser)),
    logInGuest: () => dispatch(login({email: 'guest@user.com', password: 'NobodyWillGuessThisPassword17'}))}
}

export default connect(null, mDTP)(SignUp)