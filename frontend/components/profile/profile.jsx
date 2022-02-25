import React from "react";
import PostFormContainer from "../posts/post_form_container";
import PostIndexContainer from "../posts/post_index_container";
import ProfileHeader from "./profile_header";
import ProfilePicture from "./profile_picture";
import ProfileCoverPhoto from "./profile_cover_photo"
import PostFormClosed from '../posts/post_form_closed';

class Profile extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchUser(this.props.userId)
  }

  componentDidUpdate(prevProps) {
    if (this.props.userId !== prevProps.userId)
    this.props.fetchUser(this.props.userId)
  }

  render() {
    if (!this.props.user) {
      return null;
    }
    return (
      <div>
        <div className="my-profile-background">
          <ProfileCoverPhoto currentUser={this.props.currentUser} user={this.props.user} userId={this.props.userId} updateUser={this.props.updateUser}/>
          <ProfilePicture currentUser={this.props.currentUser} user={this.props.user} userId={this.props.userId} updateUser={this.props.updateUser}/>
          <div className="profile-header-name">{this.props.user.firstName} {this.props.user.lastName}</div>
          <ProfileHeader/>
        </div>
        <PostFormClosed modal={this.props.modal} openModal={this.props.openModal}/>
        <PostIndexContainer user={this.props.user} userId={this.props.userId}/>
      </div>
    )
  }
}

export default Profile