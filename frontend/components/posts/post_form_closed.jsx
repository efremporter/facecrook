import React from 'react';
import { Link } from 'react-router-dom';

class PostFormClosed extends React.Component {

  constructor(props) {
    super(props)
    this.state = {user: null}
  }

  componentDidMount() {
    this.props.fetchUser(this.props.currentUser.id)
    .then( user => this.setState({user}))
  }

  render() {
    if (!this.state.user) return null
    return (
      <div className='post-form-closed-container'>
        <form className="post-form">
          <div className='post-form-closed-div'>
            <Link to={`/users/${this.state.user.id}`}><img className='post-form-closed-profile-picture' src={this.state.user.profilePictureUrl}/></Link>
            <div className="post-form-closed-input"><input value="" className="post-form-file" type="text" placeholder="What's on your mind?" onClick={this.props.openModal} readOnly/></div>
          </div>
          <hr className="post-form-divider"></hr>
        </form>
      </div>
    ) 
  }
}

export default PostFormClosed;