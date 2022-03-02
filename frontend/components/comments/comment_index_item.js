import React from "react";

class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {author: null}
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

  render() {
    return (
      <div>
        {this.getProfilePicture()}
        <div className="comment-background">
          {this.props.comment.body}
        </div>
        <button onClick={this.deleteComment.bind(this)}>Delete</button>
      </div>
    )
  }
}

export default CommentIndexItem;