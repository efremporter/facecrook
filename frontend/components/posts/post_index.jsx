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
    return (
      <ul>
        {this.props.posts.map( post => {
          return <li><PostIndexItem post={post}/></li>
        })}
        <div>hi</div>
      </ul>
    )
  }
}

export default PostIndex