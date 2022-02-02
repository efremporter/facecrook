import React from "react";

class ProfilePicture extends React.Component {

  constructor(props) {
    super(props)
    this.state = {profilePicture: window.currentUser.profilePicture}
  }

  componentDidMount() {

  }

  handleFile(e) {
    e.preventDefault()
    console.log(e.currentTarget.files[0])
    this.setState({profilePicture: e.currentTarget.files[0]})
  }

  handleSubmit(e) {
    console.log('submit')
    e.preventDefault()
    window.currentUser.profilePicture = this.state.profilePicture
  } 

  render() {
    if (window.currentUser.id === parseInt(this.props.userId)) {
      return (
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="profile-pic-container">
            <img className="profile-picture" src={this.props.user.photoUrl}/>
          </div>
          <br></br>
          <label>
            <img className="camera-icon" src={window.cameraIcon}/>
            <input className="edit-profile-pic" type="file" onChange={this.handleFile.bind(this)}/>
          </label>
          {/* <button className="submit-profile-pic">Submit</button> */}
        </form> 
      )
    } else {
      return (
        <div>
          Profile Picture
          <img className="profile-picture" src={this.props.user.photoUrl}/>
        </div>
      )
    }
  }
}

export default ProfilePicture