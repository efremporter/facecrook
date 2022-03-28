import { connect } from "react-redux";
import PhotosIndexMini from "./photos_index_mini";

const mSTP = state => {
  return {
    posts: Object.values(state.entities.posts).reverse()
  }
}

export default connect(mSTP, null)(PhotosIndexMini)