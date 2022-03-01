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
        this.setState({photo: e.currentTarget.files[0]})
      }
    }
  } 

  render() {
    console.log(this.props)
    return (
      <form className="">
        <img className="mini-profile-pic-post" id="mini-pic-on-comment" src={this.props.author.profilePictureUrl}/>
        <input value={this.state.body} onChange={this.handleChange('body')} className="comment-form-file" type="text" placeholder="Write a comment..." />
        <div className="comment-camera-icon-container"><img className="comment-camera-icon" src={window.commentCameraIcon}/></div>
        <div className="comment-sub-text">Press Enter to post.</div>
      </form>
    )
  }
}

export default CommentForm;