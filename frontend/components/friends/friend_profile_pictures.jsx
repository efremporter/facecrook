import React from "react";

class FriendProfilePictures extends React.Component {
  constructor(props) {
    super(props)
    this.state = {friends: []}
  }

  componentDidMount() {

    if (this.props.friends) {
      this.props.friends.forEach( friend => {
        if (friend.friendId !== this.props.currentUserId && friend.userId === this.props.currentUserId) {
          this.props.fetchUser(friend.friendId, user => {
            let friends =  this.state.friends
            friends.push(user)
            this.setState({friends})
          })
        } else if (friend.friendId === this.props.currentUserId && friend.userId !== this.props.currentUserId) {
          this.props.fetchUser(friend.userId, user => {
            let friends = this.state.friends
            friends.push(user)
            this.setState({friends})
          })
        }
      })
    }
  }

  render() {
    console.log(this.state)
    if (this.state.friends.length < 1) return null
    return (
      <ul>
        {this.state.friends.map( (friend, idx) => {
          if (idx < 7) {
            return <li><img src={friend.profilePictureUrl}/></li>
          }
        })}
      </ul>
    )
  }
}

export default FriendProfilePictures