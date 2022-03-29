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
      while(suggestedFriends.length < 9) {
        let i = Math.floor(Math.random() * this.props.users.length);
        let suggestedFriend = this.props.users[i]
        if (suggestedFriend.id !== this.props.currentUserId) {
          if (!suggestedFriends.includes(suggestedFriend)) {
            
            suggestedFriends.push(suggestedFriend)
          }
        }
        i++;
      }
      this.setState({suggestedFriends})
    }
  }

  render() {
    console.log(this.state.suggestedFriends)
    if (!this.state.suggestedFriends) return null;
    return (
      <div className='mini-friend-index-div'>
        <div className='mini-friend-index-header'>
          <span className='mini-friend-index-title'>Friend Suggestions</span>
        </div>
        <ul className='mini-friend-index-image-ul'>
          {this.state.suggestedFriends.map( (suggestedFriend, idx) => {
            if (idx <= 8) {
              return <li key={idx} className='mini-friend-index-image-li'>
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