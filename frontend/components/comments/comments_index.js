import React from "react";
import CommentIndexItem from "./comment_index_item";

class CommentIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchComments(this.props.postId)
  }

  render() {
    return (
      <ul>
        {this.props.comments.map( (comment, idx) => {
          return <li key="idx"><CommentIndexItem comment={comment} fetchAuthor={this.props.fetchAuthor}/></li>
        })}
      </ul>
    )
  }
}

export default CommentIndex;