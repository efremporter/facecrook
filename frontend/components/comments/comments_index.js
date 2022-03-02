import React from "react";
import CommentIndexItem from "./comment_index_item";

class CommentIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchComments(this.props.postId)
  }

  componentWillUnmount() {
    this.props.clearComments()
  }

  render() {
    return (
      <ul>
        {this.props.comments.map( comment => {
          if (comment.postId === this.props.postId) {
            return <li key={comment.id}><CommentIndexItem comment={comment} fetchAuthor={this.props.fetchAuthor} deleteComment={this.props.deleteComment}/></li>
          }
        })}
      </ul>
    )
  }
}

export default CommentIndex; 