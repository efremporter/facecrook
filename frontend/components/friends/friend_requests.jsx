import React from 'react';

class FriendRequests extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  getFriendStatus() {
    console.log(this.props.userId, this.props.friendId)
    this.props.getFriendStatus(this.props.userId, this.props.friendId)
    .then( friend => console.log(friend))
    .catch( () => console.log('HEREHEREHERE'))
  }

  render() {
    if (this.props.userId === this.props.currentUserId) return null;
    return (
      <div>
        {this.getFriendStatus()}
      </div>
    )
  }
}

export default FriendRequests