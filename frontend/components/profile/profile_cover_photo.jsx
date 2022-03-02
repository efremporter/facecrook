import React from "react";

class ProfileCoverPhoto extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this.setState({
      id: this.props.user.id,
      coverPhotoUrl: this.props.user.coverPhotoUrl
    })
  }

  handleFile(e) {
    e.preventDefault()
    this.setState({profileCoverPhoto: e.currentTarget.files[0]}, () => this.props.updateUser(this.state))
  }

  changeCoverButton() {
    if (this.props.currentUser.id === this.props.userId) {
      if (this.props.user.coverPhotoUrl === undefined || this.props.user.coverPhotoUrl === null) {
        return (
          <label className="camera-icon-label">
            <div className="cover-camera-icon-container">
              <img className="cover-camera-icon" src={window.cameraIcon}/>
              <span className="add-cover-photo-text">Add Cover Photo</span>
            </div>
            <input className="edit-profile-pic" type="file" onChange={this.handleFile.bind(this)}/>
          </label>
        )
      } else {
        return (  
          <label className="camera-icon-label">
            <div className="cover-camera-icon-container" id="cover-already-exists">
              <img className="cover-camera-icon" src={window.cameraIcon}/>
              <span className="add-cover-photo-text">Change</span>
            </div>
            <input className="edit-profile-pic" type="file" onChange={this.handleFile.bind(this)}/>
          </label>
        )
      }
    } else {
      return null
    }
  }

  render() {
    return (
      <div className="profile-cover-placeholder">
        <img src={this.props.user.coverPhotoUrl} className="profile_cover_photo"/>
        <div className="profile-cover-gradient-bar">
          {this.changeCoverButton()}
        </div>
      </div>
    )
  }
}

export default ProfileCoverPhoto