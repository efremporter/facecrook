import React from "react";

class ProfilePicture extends React.Component {

  constructor(props) {
    super(props)
    this.state = {user_id: this.props.userId, url: null}
  }

  componentDidMount() {
    this.props.fetchProfilePicture();
  }

  handleFile(e) {
    e.preventDefault()
    this.setState({profilePicture: e.currentTarget.files[0]})
  }

  handleSubmit(e) {
    console.log('submit')
    e.preventDefault()
    this.props.createProfilePicture(this.state)
  } 

  render() {
    console.log('state', this.state)
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        Profile Picture
        <img src={this.props.profilePicture}/>
        <input type="file" onChange={this.handleFile.bind(this)}/>
        <button >Submit</button>
      </form> 
    )
  }
}

export default ProfilePicture