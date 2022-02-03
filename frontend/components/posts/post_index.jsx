import React from 'react';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchPosts(this.props.userId)
  }

  render() {
    if (!this.props.posts.length) {
      return null;
    }
    return (
      <ul>
        {this.props.posts.map( (post, idx) => {
          return <li><PostIndexItem fetchAuthor={this.props.fetchAuthor} key={idx} user={this.props.user} post={post}/></li>
        })}
      </ul>
    )
  }
}

export default PostIndex