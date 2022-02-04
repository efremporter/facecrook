import React from "react";
import PostFormContainer from "../posts/post_form_container";
import PostIndexContainer from "../posts/post_index_container";
import ProfileHeader from "./profile_header";
import ProfilePicture from "./profile_picture";

class Profile extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchUser(this.props.userId)
  }

  render() {
    if (!this.props.user) return null;
    let component;
    if (window.currentUser.id === parseInt(this.props.userId)) {
      component = <div>
        <div className="my-profile-background">
          <div className="my-cover-photo"></div>
          <ProfilePicture user={this.props.user} userId={this.props.userId}/>
          <div className="profile-header-name">{this.props.user.firstName} {this.props.user.lastName}</div>
          {/* <hr className="header-divider"></hr> */}
          <ProfileHeader/>
          <PostFormContainer />
          <PostIndexContainer user={this.props.user} userId={this.props.userId}/>
        </div>
      </div>
    } else {
      component = <div>
        <div className="my-profile-background">
          <div className="my-cover-photo"></div>
          <ProfilePicture user={this.props.user} userId={this.props.userId}/>
          <div className="profile-header-name">{this.props.user.firstName} {this.props.user.lastName}</div>
          {/* <hr className="header-divider"></hr> */}
          <ProfileHeader/>
          <PostFormContainer />
          <PostIndexContainer user={this.props.user} userId={this.props.userId}/>
        </div>
      </div>
    }
    return (
    <div className="profile-background">
      {component}
    </div>
    )
  }
}

export default Profile