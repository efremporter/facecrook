import React from 'react';

class FriendRequests extends React.Component {
  constructor(props) {
    super(props)
    this.state = {userId: this.props.userId, friendId: this.props.currentUserId, status: null}
  }

  componentDidMount() {
    this.props.getFriends(this.props.userId)
    .then( () => this.setFriendStatus())
  }

  componentDidUpdate(prevProps) {
    if (prevProps.friends.length !== this.props.friends.length) {
      this.props.getFriends(this.props.userId)
      .then( () => this.setFriendStatus())
    }
  }

  setFriendStatus() {
    let status = 'false'
    if (this.props.friends.length > 0) {
      this.props.friends.forEach( friend => {
        if (this.props.currentUserId === friend.friendId) {
          if (friend.status) status = friend.status
        } 
      })
    }
    this.setState({status})
  }

  createFriend() {
    let friend = {userId: this.state.userId, friendId: this.state.friendId, status: 'pending'}
    this.props.createFriend(friend)
  }

  removeFriend() {
    this.props.friends.forEach( friend => {
      if (friend.userId === this.props.userId) {
        this.props.deleteFriend(friend.id)
      }
    })
  }

  getFriendStatus() {
    if (this.state.status === 'true') {
      return (
        <label>
          <div className='add-remove-friends-button' id="remove-friends-button">
            <img className="add-friend-icon" src={window.friendsIcon}/>
            <div className='add-friend-icon-text' id="remove-friend-icon-text">Friends</div>
          </div>
        </label>
      )
    } else if (this.state.status === 'false') {
      return (
        <label>
          <div className='add-remove-friends-button'>
            <img className="add-friend-icon" src={window.addFriendIcon} />
            <div onClick={this.createFriend.bind(this)} className='add-friend-icon-text'>Add Friend</div>
          </div>
        </label>
      )
    } else if (this.state.status === 'pending') {
      return (
        <label>
          <div onClick={this.removeFriend.bind(this)} className='add-remove-friends-button' id="remove-friends-button">
            <img className="add-friend-icon" src={window.friendsIcon}/>
            <div className='add-friend-icon-text' id="remove-friend-icon-text">Pending</div>
          </div>
        </label>
      )
    }
  }

  render() {
    if (this.props.userId === this.props.currentUserId) return null;
    console.log(this.state)
    if (this.state.status === null) return null;
    return (
      <div>
        {this.getFriendStatus()}
      </div>
    )
  }
}

export default FriendRequests