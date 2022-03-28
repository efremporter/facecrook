import React from "react";
import CommentIndexItem from "./comment_index_item";

class CommentIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidUpdate(prevProps) {
    if (this.props.comments.length !== prevProps.comments.length) {
      this.props.fetchComments(this.props.post.id)
    }
  }

  render() {
    return (
      <ul>
        {this.props.comments.map( comment => {
          if (comment.postId === this.props.post.id) {
            return <li key={comment.id}><CommentIndexItem currentUser={this.props.currentUser} post={this.props.post} comment={comment} fetchAuthor={this.props.fetchAuthor} deleteComment={this.props.deleteComment}/></li>
          }
        })}
      </ul>
    )
  }
}

export default CommentIndex; 