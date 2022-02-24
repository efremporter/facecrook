import React from "react";
import PostFormContainer from "../posts/post_form_container";
import PostIndexContainer from "../posts/post_index_container";
import ProfileHeader from "./profile_header";
import ProfilePicture from "./profile_picture";
import ProfileCoverPhoto from "./profile_cover_photo";

class Profile extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log("COMPONENT DID MOUNT FIRING")
    this.props.fetchUser(this.props.userId)
  }

  componentDidUpdate(prevProps) {
    if (this.props.userId !== prevProps.userId)
    this.props.fetchUser(this.props.userId)
  }

  render() {
    console.log(this.props.user)
    if (!this.props.user) {
      console.log('HITTING NULL CHECK')
      return null;
    }
    return (
      <div className="profile-background">
        <div>
          <div className="my-profile-background">
            <ProfileCoverPhoto currentUser={this.props.currentUser} user={this.props.user} userId={this.props.userId} updateUser={this.props.updateUser}/>
            <ProfilePicture currentUser={this.props.currentUser} user={this.props.user} userId={this.props.userId} updateUser={this.props.updateUser}/>
            <div className="profile-header-name">{this.props.user.firstName} {this.props.user.lastName}</div>
            <ProfileHeader/>
            <PostFormContainer />
            <PostIndexContainer user={this.props.user} userId={this.props.userId}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile