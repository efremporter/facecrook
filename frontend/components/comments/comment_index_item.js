import React from "react";
import { Link } from "react-router-dom";

class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {author: null}
    this.getAuthorName = this.getAuthorName.bind(this)
    this.getLinkToProfile = this.getLinkToProfile.bind(this)
  }

  componentDidMount() {
    this.props.fetchAuthor(this.props.comment.authorId)
    .then( author => {this.setState({author})})
  }

  getProfilePicture() {
    if (this.state.author) {
      return <img className="mini-profile-pic-post" id="mini-pic-on-comment" src={this.state.author.profilePictureUrl}/>
    } else {
      return null;
    }
  }

  deleteComment() {
    this.props.deleteComment(this.props.comment.id)
  }

  getAuthorName() {
    return this.getLinkToProfile()
  }

  getLinkToProfile() {
    if (this.state.author) {
      if (this.state.author.id !== this.props.post.authorId) {
        return <Link to={`/users/${this.state.author.id}`} className="comment-author-name-link"><div className="comment-author-name">{this.state.author.firstName} {this.state.author.lastName}</div></Link>
      } else {
        return <div className="comment-author-name">{this.state.author.firstName} {this.state.author.lastName}</div>
      }
    } else {
      return null
    }
  }

  getAttachedPhoto() {
    if (this.props.comment.photoUrl) {
      return <img className="comment-attached-photo" src={this.props.comment.photoUrl} />
    }
  }

  getDelete() {
    if (this.props.currentUser.id === this.props.post.authorId || this.props.currentUser.id === this.props.post.profileId || this.props.currentUser.id === this.props.comment.authorId)
    {
      return <div className="post-delete-dots" id="comment-delete-dots">
        <span className="profile-delete-dots-span" id="comment-delete-dots-span">...</span>
        <div onClick={this.deleteComment.bind(this)} className="delete-post-button" id="delete-comment-button"><img className="delete-post-icon" id="comment-delete-icon" src={window.trashCan} /></div>
      </div>
    } else {
      return null;
    }
  }

  render() {
    return (
      <div className="comment-container">
        {this.getProfilePicture()}
        <div className="comment-background">
          {this.getAuthorName()}
          <div className="comment-body">{this.props.comment.body}</div>
          {this.getDelete()}
          {this.getAttachedPhoto()}
        </div>
      </div>
    )
  }
}

export default CommentIndexItem;