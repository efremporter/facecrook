import { connect } from "react-redux";
import PhotosIndex from "./photos_index";

const mSTP = state => {
  return {
    posts: Object.values(state.entities.posts).reverse
  }
}

export default connect(mSTP, null)(PhotosIndex)