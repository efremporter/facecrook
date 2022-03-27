import React from 'react';
import Link from 'react-router-dom/Link';

class FriendsIndex extends React.Component {

  constructor(props) {
    super(props)
    this.state = {friends: []}
  }

  componentDidMount() {
    if (this.props.friends) {
      this.props.friends.forEach( friend => {
        if (friend.friendId !== this.props.profileId && friend.userId === this.props.profileId && friend.status === 'true') {
          this.props.fetchUser(friend.friendId)
          .then( user => {
            let friends =  this.state.friends
            friends.push(user)
            this.setState({friends})
          })
        } else if (friend.friendId === this.props.profileId && friend.userId !== this.props.profileId && friend.status === 'true') {
          this.props.fetchUser(friend.userId)
          .then( user => {
            let friends = this.state.friends
            friends.push(user)
            this.setState({friends})
          })
        }
      })
    }
  }

  getFriendCount() {
    let friend = ''
    if (this.state.friends.length === 1) {
      friend = 'friend'
    } else {
      friend = 'friends'
    }
    return <div className="mini-friend-index-count">{this.state.friends.length} {friend}</div>
  }

  render() {
    if (!this.state.friends) return null;
    return (
      <div className='mini-friend-index-div'>
        <div className='mini-friend-index-header'>
          <span className='mini-friend-index-title'>Friends</span>
          <span className='link-to-full-friends-index'>See all friends</span>
        </div>
        {this.getFriendCount()}
        <ul className='mini-friend-index-image-ul'>
          {this.state.friends.map( (friend, idx) => {
            if (idx <= 8) {
            return <li className='mini-friend-index-image-li'>
              <Link to={`/users/${friend.id}`}><img className='mini-friend-index-image' src={friend.profilePictureUrl}/></Link>
              <div className='mini-friend-index-name'>{friend.firstName} {friend.lastName}</div>
            </li>
            }
          })}
        </ul>
      </div>
    )
  }
}

export default FriendsIndex