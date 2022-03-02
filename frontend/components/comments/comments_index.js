import React from "react";
import CommentIndexItem from "./comment_index_item";

class CommentIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchComments(this.props.postId)
  }

  componentDidUpdate(prevProps) {
    // if (this.props.comments && this.props.comments.length < prevProps.comments.length) {
      // this.props.fetchComments(this.props.postId)
      // console.log('fire')
    // }
  }

  componentWillUnmount() {
    this.props.clearComments()
  }

  render() {
    return (
      <ul>
        {this.props.comments.map( comment => {
          if (comment.postId === this.props.postId) {
            return <li key={comment.id}><CommentIndexItem comment={comment} fetchAuthor={this.props.fetchAuthor}/></li>
          }
        })}
      </ul>
    )
  }
}

export default CommentIndex; 