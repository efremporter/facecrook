import React from "react";

class ProfilePicture extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this.setState({
      id: this.props.user.id,
      photoUrl: this.props.user.photoUrl
    })
  }

  handleFile(e) {
    e.preventDefault()
    this.setState({photoUrl: e.currentTarget.files[0]}, () => this.props.updateUser(this.state))
  }

  handleSubmit(e) {
    console.log('submit')
    e.preventDefault()
    // this.props.user.profilePicture = this.state.profilePicture
  } 

  render() {
    if (this.props.currentUser.id === this.props.userId) {
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
          <div className="profile-pic-container">
            <img className="profile-picture" src={this.props.user.photoUrl}/>
          </div>
        </div>
      )
    }
  }
}

export default ProfilePicture