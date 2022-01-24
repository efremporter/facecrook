import { connect } from 'react-redux';
import { createNewUser } from '../../actions/session_actions';
import SignUp from './signup'

const mDTP = dispatch => {
  return {
    createNewUser: formUser => dispatch(createNewUser(formUser))
  }
}

export default connect(null, mDTP)(SignUp)