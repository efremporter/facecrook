import React from "react";

class CommentForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {body: '', authorId: window.currentUser.id, postId: null, photo: null}
  }

  componentDidMount() {
    if (this.props.postId) {
      this.setState({postId: this.props.postId})
    }
  }

  render() {
    console.log(this.props)
    return (
      <form className="">
        <img className="mini-profile-pic-post" src={this.props.author.profilePictureUrl}/>
        <input value="" className="comment-form-file" type="text" placeholder="Write a comment..." />
      </form>
    )
  }
}

export default CommentForm;