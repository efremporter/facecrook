import React from "react";
import PostFormContainer from "../posts/post_form_container";
import PostIndexContainer from "../posts/post_index_container";
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
      console.log('My profile')
      component = <div>
        <div className="my-profile-background">
          <div className="my-cover-photo"></div>
          <ProfilePicture user={this.props.user} userId={this.props.userId}/>
          <PostFormContainer/>
          <PostIndexContainer userId={this.props.userId}/>
        </div>
      </div>
    } else {
      console.log('Other profile')
      component = <div>
        <ProfilePicture user={this.props.user} userId={this.props.userId}/>
        <PostIndexContainer userId={this.props.userId} />
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