import React from 'react'
import FeedIndexItem from './feed_index_item';
import PostIndexItem from '../posts/post_index_item';
import PostFormClosed from '../posts/post_form_closed';

class FeedIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchAllPosts()
  }

  componentDidUpdate() {
    
  }

  componentWillUnmount() {
    this.props.clearPosts()
  }

  render() {
    if (!this.props.posts) return null;
    return (
      <div>
        <PostFormClosed modal={this.props.modal} openModal={this.props.openModal}/>
        <ul>
          {this.props.posts.map( (post) => {
            if (post.authorId === post.profileId) {
              return <li key={post.id}><PostIndexItem deleteComment={this.props.deleteComment} clearComments={this.props.clearComments} comments={this.props.comments} fetchComments={this.props.fetchComments} deletePost={this.props.deletePost} currentUser={this.props.currentUser} fetchAuthor={this.props.fetchAuthor} post={post} /></li>
            }
          })}
        </ul>
      </div>
    )
  }
}

export default FeedIndex