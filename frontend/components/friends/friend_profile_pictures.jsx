import React from "react";
import { Link } from "react-router-dom";

class FriendProfilePictures extends React.Component {
  constructor(props) {
    super(props)
    this.state = {friends: [], count: 0}
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
    return <div className="profile-friend-count">{this.state.friends.length} {friend}</div>
  }

  render() {
    if (this.state.friends.length < 1) return null
    return (
      <div>
        {this.getFriendCount()}
        <ul className="friend-profile-picture-ul">
          {this.state.friends.map( (friend, idx) => {
            if (idx <= 7) {
              return <Link to={`/users/${friend.id}`}><li className="friend-profile-picture-li"><img className="friend-profile-picture" src={friend.profilePictureUrl}/></li></Link>
            }
          })}
        </ul>
      </div>
    )
  }
}

export default FriendProfilePictures