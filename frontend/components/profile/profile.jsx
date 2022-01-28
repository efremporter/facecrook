import React from "react";
import PostIndexContainer from "../posts/post_index_container";
import PostIndexItem from "../posts/post_index_item";
import ProfilePicture from "./profile_picture";

class Profile extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchUser(this.props.userId)
  }

  render() {
    // if (!this.props.posts) {
    //   return null
    // } else {

    // }
    if (window.currentUser.id === parseInt(this.props.userId)) {
      return (
        <div>
          <h1>My profile</h1>
          <ProfilePicture />
          <PostIndexContainer userId={this.props.userId}/>

        </div>
      )
    } else {
      return (
        <div>
          <h1>Other Profile</h1>
          <ProfilePicture />
          <PostIndexContainer userId={this.props.userId} />
        </div>
      )
    }
  }
}

export default Profile