import React from 'react';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchPosts(this.props.userId)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.posts.length !== this.props.posts.length) {
      this.props.fetchPosts(this.props.userId)
    }
  }

  render() {
    if (!this.props.posts.length) {
      return null;
    }
    return (
      <ul>
        {this.props.posts.map( (post) => {
          return <li key={post.id}><PostIndexItem currentUser={this.props.currentUser} deletePost={this.props.deletePost} fetchAuthor={this.props.fetchAuthor} user={this.props.user} post={post}/></li>
        })}
      </ul>
    )
  }
}

export default PostIndex