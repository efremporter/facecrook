import React from "react";
import PostIndexContainer from "../posts/post_index_container";
import ProfilePicture from "./profile_picture";
import ProfileCoverPhoto from "./profile_cover_photo"
import FriendRequestsContainer from '../friends/friend_requests_container';
import FriendProfilePicturesContainer from "../friends/friend_profile_pictures_container";
import FriendsIndexMiniContainer from "../friends/friends_index_mini_container";
import PostFormClosedContainer from "../posts/post_form_closed_container";
import PhotosIndexContainer from "./photos_index_container";
import { Link } from "react-router-dom";
import FriendsIndexContainer from "../friends/friends_index_container";

class Profile extends React.Component {

  constructor(props) {
    super(props)
    this.state = {posts: false, friends: false, photos: false}
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
    if (this.state.posts) {
      return this.getPostsTab();
    } else if (this.state.friends) {
      return this.getFriendsTab();
    } else if (this.state.photos) {

    }
  }

  getPostsTab() {
    return (
      <div>
        <div className="profile-body-right-side">
          <PostFormClosedContainer currentUser={this.props.currentUser} modal={this.props.modal} openModal={this.props.openModal}/>
          <PostIndexContainer fetchUser={this.props.fetchUser} user={this.props.user} userId={this.props.userId}/>
        </div>
        <PhotosIndexContainer />
        <FriendsIndexMiniContainer currentUserId={this.props.currentUser.id} profileId={this.props.userId}/>
      </div>
    )
  }

  getFriendsTab() {
    return (
      <FriendsIndexContainer currentUserId={this.props.currentUser.id} profileId={this.props.userId}/>
    )
  }

  changeTabs(tab) {
    return () => {
      if (tab === 'posts') {
        this.setState({posts: true, friends: false, photos: false})
      } else if (tab === 'friends') {
        this.setState({posts: false, friends: true, photos: false})
      } else if (tab === 'photos') {
        this.setState({posts: false, friends: false, photos: true})
      }
    }
  }

  render() {
    if (!this.props.user) {
      return null;
    }
    return (
      <div className="profile-top-level">
        <div className="my-profile-background">
          <ProfileCoverPhoto currentUser={this.props.currentUser} user={this.props.user} userId={this.props.userId} updateUser={this.props.updateUser}/>
          <ProfilePicture currentUser={this.props.currentUser} user={this.props.user} userId={this.props.userId} updateUser={this.props.updateUser} fetchUser={this.props.fetchUser}/>
          <div className="profile-header-name">{this.props.user.firstName} {this.props.user.lastName}</div>
          <FriendProfilePicturesContainer currentUserId={this.props.currentUser.id} profileId={this.props.userId}/>
          <FriendRequestsContainer name={this.props.user.firstName + " " + this.props.user.lastName} userId={this.props.userId}/>
          <hr className="profile-header-body-divider"></hr>
            <div className="profile-tabs-div">
              <span onClick={this.changeTabs('posts').bind(this)} className="profile-tabs-span" id="profile-tabs-span-posts">Posts</span>
              <span onClick={this.changeTabs('friends').bind(this)} className="profile-tabs-span">Friends</span>
              <span onClick={this.changeTabs('photos').bind(this)} className="profile-tabs-span">Photos</span>
            </div>
        </div>
        <div className='profile-body-container'>
          {this.getTab()}
        </div>
      </div>
    )
  }
}

export default Profile