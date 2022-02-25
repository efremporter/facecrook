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
    console.log(prevProps.posts)
    console.log(this.props.posts)
    if (prevProps.posts !== this.props.posts) {
      // this.props.fetchPosts(this.props.userId)
    }
  }

  render() {
    if (!this.props.posts.length) {
      return null;
    }
    return (
      <ul>
        {this.props.posts.map( (post) => {
          return <li key={post.id}><PostIndexItem fetchAuthor={this.props.fetchAuthor} user={this.props.user} post={post}/></li>
        })}
      </ul>
    )
  }
}

export default PostIndex