import { connect } from "react-redux";
import { fetchAuthor } from "../../actions/user_actions";
import PostFormClosed from "./post_form_closed";

const mDTP = dispatch => {
  return {
    fetchUser: id => fetchAuthor(id)
  }
}

export default connect(null, mDTP)(PostFormClosed)