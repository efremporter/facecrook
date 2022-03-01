import React from "react";

class CommentForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {body: '', authorId: window.currentUser.id, postId: null, photo: null}
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
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
    console.log(this.state)
    this.props.createComment(this.state)
    .then( () => {this.setState({body: "", photo: null})})
    .catch( () => console.log('NOOOOOO'))
  }

  getPictureLogo() {
    if (!this.state.photo) {
      return <img className="comment-camera-icon" src={window.commentCameraIcon}/>
    } else {
      return <img className="post-picture-icon" src={window.checkMark}/>
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <img className="mini-profile-pic-post" id="mini-pic-on-comment" src={this.props.author.profilePictureUrl}/>
        <input type="submit" value={this.state.body} onChange={this.handleChange('body')} className="comment-form-file" type="text" placeholder="Write a comment..." />
        <label>
          <div className="comment-camera-icon-container" onChange={this.handleChange('photo')}>
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