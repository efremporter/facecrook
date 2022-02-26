import React from 'react'
import FeedIndexItem from './feed_index_item';

class FeedIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchAllPosts()
  }

  render() {
    if (!this.props.posts) return null;
    return (
      <ul>
        {this.props.posts.map( (post, idx) => {
          if (post.authorId === post.profileId) {
            return <li key={idx}><FeedIndexItem deletePost={this.props.deletePost} currentUser={this.props.currentUser} fetchAuthor={this.props.fetchAuthor} post={post} /></li>
          }
        })}
      </ul>
    )
  }
}

export default FeedIndex