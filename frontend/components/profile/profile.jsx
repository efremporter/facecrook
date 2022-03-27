import React from "react";
import PostIndexContainer from "../posts/post_index_container";
import ProfilePicture from "./profile_picture";
import ProfileCoverPhoto from "./profile_cover_photo"
import PostFormClosed from '../posts/post_form_closed';
import FriendRequestsContainer from '../friends/friend_requests_container';
import FriendProfilePicturesContainer from "../friends/friend_profile_pictures_container";
import FriendsIndexContainer from "../friends/friends_index_container";

class Profile extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchFriends(this.props.userId)
    this.props.fetchUser(this.props.userId)
  }

  componentDidUpdate(prevProps) {
    if (this.props.userId !== prevProps.userId) {
      this.props.clearFriends()
      this.props.clearUsers()
      this.props.fetchFriends(this.props.userId)
      this.props.fetchUser(this.props.userId)
    }
    
    if (prevProps.user && this.props.user) {
      if (prevProps.user.profilePictureUrl !== this.props.user.profilePictureUrl) {
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
          <FriendProfilePicturesContainer currentUserId={this.props.currentUser.id} profileId={this.props.userId}/>
          <FriendRequestsContainer name={this.props.user.firstName + " " + this.props.user.lastName} userId={this.props.userId}/>
        </div>
        <div className='profile-body-container'>
          <div className="profile-body-right-side">
            <PostFormClosed modal={this.props.modal} openModal={this.props.openModal}/>
            <PostIndexContainer fetchUser={this.props.fetchUser} user={this.props.user} userId={this.props.userId}/>
          </div>
          <FriendsIndexContainer currentUserId={this.props.currentUser.id} profileId={this.props.userId}/>
        </div>
      </div>
    )
  }
}

export default Profile