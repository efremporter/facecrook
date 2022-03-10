import React from 'react';

class FriendRequests extends React.Component {
  constructor(props) {
    super(props)
    this.state = {userId: null, friendId: null, status: null}
  }

  componentDidMount() {
    this.props.getFriends(this.props.userId)
    .then( () => this.setFriendStatus())
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.props.getFriends(this.props.userId)
      .then( () => this.setFriendStatus())
    }
  }

  setFriendStatus() {
    let status = 'false'
    let userId;
    let friendId;
    if (this.props.friends.length > 0) {
      this.props.friends.forEach( friend => {
        if (this.props.currentUserId === friend.friendId || this.props.currentUserId === friend.userId) {
          if (friend.status) status = friend.status
          friendId = friend.friendId
          userId = friend.userId
        } 
      })
    }
    this.setState({userId, friendId, status})
  }

  createFriend() {
    let friend = {userId: this.props.userId, friendId: this.props.currentUserId, status: 'pending'}
    this.props.createFriend(friend)
  }

  removeFriend() {
    this.props.friends.forEach( friend => {
      if (friend.userId === this.props.currentUserId || friend.friendId === this.props.currentUserId) {
        this.props.deleteFriend(friend.id)
      }
    })
  }

  confirmFriendRequest() {
    let updatedFriend;
    this.props.friends.forEach( friend => {
      if (friend.userId === this.props.currentUserId || friend.friendId === this.props.currentUserId) {
        updatedFriend = friend
      }
    })
    updatedFriend.status = 'true';
    this.props.updateFriend(updatedFriend)
  }

  getFriendStatus() {
    if (this.state.status === 'true') {
      return (
        <label>
          <div onClick={this.removeFriend.bind(this)} className='add-remove-friends-button' id="remove-friends-button">
            <img className="add-friend-icon" src={window.friendsIcon}/>
            <div className='add-friend-icon-text' id="remove-friend-icon-text">Friends</div>
          </div>
        </label>
      )
    } else if (this.state.status === 'false') {
      return (
        <label>
          <div onClick={this.createFriend.bind(this)} className='add-remove-friends-button'>
            <img className="add-friend-icon" src={window.addFriendIcon} />
            <div className='add-friend-icon-text'>Add Friend</div>
          </div>
        </label>
      )
    } else if (this.state.status === 'pending' && this.state.friendId === this.props.currentUserId) {
      return (
        <label>
          <div onClick={this.removeFriend.bind(this)} className='add-remove-friends-button' id="remove-friends-button">
            <img className="add-friend-icon" src={window.friendsIcon}/>
            <div className='add-friend-icon-text' id="remove-friend-icon-text">Pending</div>
          </div>
        </label>
      )
    } else if (this.state.status === 'pending' && this.state.userId === this.props.currentUserId) {
      return (
        <div className='friend-request-strip-container'>
          <div className='sent-you-a-friend-request'>{this.props.name} sent you a friend request</div>
          <button onClick={this.confirmFriendRequest.bind(this)} className='confirm-friend-request-button'>Confirm Request</button>
          <button onClick={this.removeFriend.bind(this)} className='delete-friend-request-button'>Delete Request</button>
        </div>
      )
    }
  }

  render() {
    if (this.props.userId === this.props.currentUserId) return null;
    if (this.state.status === null) return null;
    return (
      <div>
        {this.getFriendStatus()}
      </div>
    )
  }
}

export default FriendRequests