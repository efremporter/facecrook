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
    let component;
    if (window.currentUser.id === parseInt(this.props.userId)) {
      component = <div>
        <h1>My profile</h1>
        <ProfilePicture userId={this.props.userId} createProfilePicture={this.props.createProfilePicture} updateProfilePicture={this.props.updateProfilePicture}/>
        <PostIndexContainer userId={this.props.userId}/>
      </div>
    } else {
      component = <div>
        <h1>Other Profile</h1>
        <ProfilePicture />
        <PostIndexContainer userId={this.props.userId} />
      </div>  
    }
    return component;
  }
}

export default Profile