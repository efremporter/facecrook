import React from "react";
import PostIndexContainer from "../posts/post_index_container";
import ProfilePicture from "./profile_picture";
import ProfileCoverPhoto from "./profile_cover_photo"
import PostFormClosed from '../posts/post_form_closed';
import FriendRequestsContainer from '../friends/friend_requests_container';

class Profile extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchUser(this.props.userId)
  }

  componentDidUpdate(prevProps) {
    if (this.props.userId !== prevProps.userId) {
      this.props.clearUsers()
      this.props.fetchUser(this.props.userId)
    }
    
    // console.log(this.props.user.profilePictureUrl)
    if (prevProps.user && this.props.user) {
      if (prevProps.user.profilePictureUrl !== this.props.user.profilePictureUrl) {
        debugger
        this.props.clearUsers()
        this.props.fetchUser(this.props.userId)
      }
    }
  }

  componentWillUnmount() {
    this.props.clearPosts()
    this.props.clearUsers()
  }

  render() {

    if (!this.props.user) {
      return null;
    }
    return (
      <div>
        <div className="my-profile-background">
          <ProfileCoverPhoto currentUser={this.props.currentUser} user={this.props.user} userId={this.props.userId} updateUser={this.props.updateUser}/>
          <ProfilePicture currentUser={this.props.currentUser} user={this.props.user} userId={this.props.userId} updateUser={this.props.updateUser} fetchUser={this.props.fetchUser}/>
          <div className="profile-header-name">{this.props.user.firstName} {this.props.user.lastName}</div>
          <FriendRequestsContainer userId={this.props.userId}/>
        </div>
        {/* <PostFormClosed modal={this.props.modal} openModal={this.props.openModal}/>
        <PostIndexContainer fetchUser={this.props.fetchUser} user={this.props.user} userId={this.props.userId}/> */}
      </div>
    )
  }
}

export default Profile