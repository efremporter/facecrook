import React from "react";
import PostIndexContainer from "../posts/post_index_container";
import ProfilePicture from "./profile_picture";
import ProfileCoverPhoto from "./profile_cover_photo"
import FriendRequestsContainer from '../friends/friend_requests_container';
import FriendProfilePicturesContainer from "../friends/friend_profile_pictures_container";
import FriendsIndexMiniContainer from "../friends/friends_index_mini_container";
import PostFormClosedContainer from "../posts/post_form_closed_container";
import PhotosIndexMiniContainer from "./photos_index_mini_container";
import { Link } from "react-router-dom";
import FriendsIndexContainer from "../friends/friends_index_container";
import PhotosIndexContainer from "./photos_index_container";

class Profile extends React.Component {

  constructor(props) {
    super(props)
    this.state = {posts: true, friends: false, photos: false}
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

  getTab() {
    if (this.props.location.pathname === `/users/${this.props.userId}`) {
      return this.getPostsTab();
    } else if (this.props.location.pathname === `/users/${this.props.userId}/friends`) {
      return this.getFriendsTab();
    } else if (this.props.location.pathname === `/users/${this.props.userId}/photos`) {
      return this.getPhotosTab();
    }
  }

  getPostsTab() {
    return (
      <div className='profile-body-container'>
        <div className="profile-body-left-side">
          <PhotosIndexMiniContainer userId={this.props.userId}/>
          <FriendsIndexMiniContainer userId={this.props.userId} profileId={this.props.userId}/>
        </div>
        <div className="profile-body-right-side">
          <PostFormClosedContainer currentUser={this.props.currentUser} modal={this.props.modal} openModal={this.props.openModal}/>
          <PostIndexContainer fetchUser={this.props.fetchUser} user={this.props.user} userId={this.props.userId}/>
        </div>
      </div>
    )
  }

  getFriendsTab() {
    return <FriendsIndexContainer profileId={this.props.userId}/>
  }

  getPhotosTab() {
    return <PhotosIndexContainer />
  }

  getBackground() {
    if (this.props.userId === this.props.currentUser.id) {
      return "my-profile-background"
    } else {
      return "other-profile-background"
    }
  }

  getProfileHeader() {
    if (this.props.userId === this.props.currentUser.id) {
      return "my-profile-header-name"
    } else {
      return "other-profile-header-name"
    }
  }

  changeTabHighlights() {
    let posts = <Link className="profile-tabs-link" to={`/users/${this.props.userId}`}><span className="profile-tabs-span">Posts</span></Link>
    let friends = <Link className="profile-tabs-link" to={`/users/${this.props.userId}/friends`}><span className="profile-tabs-span">Friends</span></Link>
    let photos = <Link className="profile-tabs-link" to={`/users/${this.props.userId}/photos`}><span className="profile-tabs-span">Photos</span></Link>
    if (this.props.location.pathname === `/users/${this.props.userId}`) {
      posts = <span className="profile-tabs-span" id="profile-tabs-span-highlighted">Posts</span>
    } else if (this.props.location.pathname === `/users/${this.props.userId}/friends`) {
      friends = <span className="profile-tabs-span" id="profile-tabs-span-highlighted">Friends</span>
    } else if (this.props.location.pathname === `/users/${this.props.userId}/photos`) {
      photos = <span className="profile-tabs-span" id="profile-tabs-span-highlighted">Photos</span>
    }
    return (
      <div className="profile-tabs-div">
        {posts}
        {friends}
        {photos}
      </div>
    )
  }

  render() {
    if (!this.props.user) {
      return null;
    }
    return (
      <div className="profile-top-level">
        <div className={this.getBackground()}>
          <ProfileCoverPhoto currentUser={this.props.currentUser} user={this.props.user} userId={this.props.userId} updateUser={this.props.updateUser}/>
          <ProfilePicture currentUser={this.props.currentUser} user={this.props.user} userId={this.props.userId} updateUser={this.props.updateUser} fetchUser={this.props.fetchUser}/>
          <div className={this.getProfileHeader()}>{this.props.user.firstName} {this.props.user.lastName}</div>
          <FriendProfilePicturesContainer currentUserId={this.props.currentUser.id} profileId={this.props.userId}/>
          <FriendRequestsContainer name={this.props.user.firstName + " " + this.props.user.lastName} userId={this.props.userId}/>
          <hr className="profile-header-body-divider"></hr>
          {this.changeTabHighlights()}
        </div>
        {this.getTab()}
      </div>
    )
  }
}

export default Profile