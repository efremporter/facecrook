import React from "react";

class FriendProfilePictures extends React.Component {
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
            console.log(friends)
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

  render() {
    if (this.state.friends.length < 1) return null
    return (
      <ul className="friend-profile-picture-ul">
        {this.state.friends.map( (friend, idx) => {
          if (idx <= 7) {
            return <li className="friend-profile-picture-li"><img className="friend-profile-picture" src={friend.profilePictureUrl}/></li>
          }
        })}
      </ul>
    )
  }
}

export default FriendProfilePictures