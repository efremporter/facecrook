import React from 'react';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchPosts(this.props.userId)
  }

  componentWillUnmount() {
    this.props.clearComments()
    this.props.clearLikes()
  }

  render() {
    if (!this.props.posts.length) {
      return null;
    }
    return (
      <ul className="post-index-container">
        {this.props.posts.map( (post) => {
          return <li key={post.id}>
            <PostIndexItem 
              fetchUser={this.props.fetchUser} 
              fetchLikes={this.props.fetchLikes} 
              clearLikes={this.props.clearLikes} 
              deleteComment={this.props.deleteComment} 
              clearComments={this.props.clearComments} 
              comments={this.props.comments} 
              likes={this.props.likes} 
              fetchComments={this.props.fetchComments} 
              currentUser={this.props.currentUser} 
              deletePost={this.props.deletePost} 
              fetchAuthor={this.props.fetchAuthor} 
              user={this.props.user} post={post}
            />
          </li>
        })}
      </ul>
    )
  }
}

export default PostIndex