import React from "react";

class Profile extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const id = this.props.userId
    this.props.fetchUser(id)
    this.props.fetchPosts(id);
  }

  render() {
    if (window.currentUser.id === parseInt(this.props.userId)) {
      return (
        <div>
          <h1>My profile</h1>
        </div>
      )
    } else {
      return (
        <div>
          <h1>Other Profile</h1>
        </div>
      )
    }
  }
}

export default Profile