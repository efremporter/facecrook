import React from 'react'
import FeedIndexItem from './feed_index_item';
import PostIndexItem from '../posts/post_index_item';
import PostFormClosed from '../posts/post_form_closed';

class FeedIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchAllPosts(this.props.currentUser.id)
  }

  componentDidUpdate() {
    
  }

  componentWillUnmount() {
    this.props.clearUsers()
    this.props.clearPosts()
    this.props.clearComments()
    this.props.clearLikes()
  }

  render() {
    if (!this.props.posts) return null;
    return (
      <div>
        <PostFormClosed modal={this.props.modal} openModal={this.props.openModal}/>
        <ul>
          {this.props.posts.map( (post) => {
            if (post.authorId === post.profileId) {
              return <li key={post.id}><PostIndexItem fetchLikes={this.props.fetchLikes} deleteComment={this.props.deleteComment} likes={this.props.likes} comments={this.props.comments} fetchComments={this.props.fetchComments} deletePost={this.props.deletePost} currentUser={this.props.currentUser} fetchAuthor={this.props.fetchAuthor} post={post} /></li>
            }
          })}
        </ul>
      </div>
    )
  }
}

export default FeedIndex