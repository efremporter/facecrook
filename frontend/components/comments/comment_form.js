import React from "react";

class CommentForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {body: '', authorId: this.props.currentUser.id, postId: null, photo: null, currentUser: this.props.currentUser}
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    this.props.fetchCurrentUser(this.props.currentUser.id)
    .then(user => this.setState({currentUser: user}))
    if (this.props.postId) {
      this.setState({postId: this.props.postId})
    }
  }

  handleChange(key) {
    return (e) => {
      if (key === 'body') {
        this.setState({body: e.currentTarget.value})
      } else if (key === 'photo') {
        if (e.currentTarget.files[0]) {
          this.setState({photo: e.currentTarget.files[0]})
        }
      }
    }
  } 

  handleSubmit() {
    const comment = {
      body: this.state.body,
      authorId: this.state.authorId,
      postId: this.state.postId,
      photo: this.state.photo
    }
    this.props.createComment(comment)
    .then( () => {this.setState({body: "", photo: null})})
    // .catch( () => console.log('need body'))
  }

  getPictureLogo() {
    if (!this.state.photo) {
      return <img className="comment-camera-icon" src={window.commentCameraIcon}/>
    } else {
      return <img className="post-picture-icon" src={window.checkMark}/>
    }
  }

  getProfilePicture() {
    if (this.state.currentUser) {
      return <img className="mini-profile-pic-post" id="mini-pic-on-comment" src={this.state.currentUser.profilePictureUrl}/>
    } else {
      return null;
    }
  }

  render() {
    return (
      <form id="comment-form" onSubmit={this.handleSubmit.bind(this)}>
        {this.getProfilePicture()}
        <input id="comment-body" type="submit" value={this.state.body} onChange={this.handleChange('body')} className="comment-form-file" type="text" placeholder="Write a comment..." />
        <label>
          <div className="comment-camera-icon-container">
            {this.getPictureLogo()}
          <input className="add-photo-to-post" type="file" onChange={this.handleChange('photo')}></input>
          </div>
        </label>
        <div className="comment-sub-text">Press Enter to post.</div>
      </form>
    )
  }
}

export default CommentForm;