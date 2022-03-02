import React from "react";

class ProfilePicture extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    if (this.props.user) {
      this.setState({
        id: this.props.user.id,
        profilePictureUrl: this.props.user.profilePictureUrl
      })
    }
  }

  handleFile(e) {
    e.preventDefault()
    this.setState({profilePicture: e.currentTarget.files[0]}, () => this.props.updateUser(this.state))
  }

  render() {
    if (this.props.currentUser.id === this.props.userId) {
      return (
        <div>
          <div className="profile-pic-container">
            <img className="profile-picture" src={this.props.user.profilePictureUrl}/>
            <label className="camera-icon-label">
              <div className="camera-icon-container">
                <img className="camera-icon" src={window.cameraIcon}/>
              </div>
              <input className="edit-profile-pic" type="file" onChange={this.handleFile.bind(this)}/>
            </label>
          </div>
          <br></br>
        </div> 
      )
    } else {
      return (
        <div>
          <div className="profile-pic-container">
            <img className="profile-picture" src={this.props.user.profilePictureUrl}/>
          </div>
        </div>
      )
    }
  }
}

export default ProfilePicture