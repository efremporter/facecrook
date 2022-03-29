import React from 'react';
import { Link } from 'react-router-dom';

class SuggestedFriends extends React.Component {

  constructor(props) {
    super(props)
    this.state = {suggestedFriends: []}
  }

  componentDidMount() {
    this.props.getFriends(this.props.currentUserId)
    this.props.fetchUsers()
    .then(() => this.getSuggestedFriends())
  }

  getSuggestedFriends() {
    let suggestedFriends = [];
    if (this.props.users) {
      let counter = 0;
      while(suggestedFriends.length < 12 || counter >= 100) {
        let i = Math.floor(Math.random() * this.props.users.length);
        let suggestedFriend = this.props.users[i]
        if (suggestedFriend.id !== this.props.currentUserId) {
          if (!this.props.friendsByFriendId[suggestedFriend.id] && !this.props.friendsByUserId[suggestedFriend.id]) {
            if (!suggestedFriends.includes(suggestedFriend)) {
              suggestedFriends.push(suggestedFriend)
            }
          }
        }
        i++;
        counter++;
      }
      this.setState({suggestedFriends})
    }
  }

  render() {
    if (!this.state.suggestedFriends) return null;
    return (
      <div className='mini-friend-index-div' id="feed-friend-suggestion-div">
        <div className='mini-friend-index-header'>
          <span className='mini-friend-index-title' id="feed-friend-suggestion-title">Friend Suggestions</span>
        </div>
        <ul className='mini-friend-index-image-ul' id="feed-friend-suggestion-ul">
          {this.state.suggestedFriends.map( (suggestedFriend, idx) => {
            if (idx <= 11) {
              return <li key={idx} className='mini-friend-index-image-li' id="feed-friend-suggestion-li">
                <Link to={`/users/${suggestedFriend.id}`}><img className='mini-friend-index-image' src={suggestedFriend.profilePictureUrl}/></Link>
                <div className='mini-friend-index-name'>{suggestedFriend.firstName} {suggestedFriend.lastName}</div>
              </li>
            }
          })}
        </ul>
      </div>
    )
  }
}

export default SuggestedFriends