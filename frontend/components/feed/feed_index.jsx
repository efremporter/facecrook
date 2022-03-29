import React from 'react'
import PostIndexItem from '../posts/post_index_item';
import PostFormClosedContainer from '../posts/post_form_closed_container';
import SuggestedFriendsContainer from '../friends/suggested_friends_container';
import OtherProjects from './other_projects';

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
      <div className='top-level-feed-div'>
        <div className="feed-middle">
          <div className='feed-index-container'>
            <div className='feed-index-top-gap'></div>
            <PostFormClosedContainer currentUser={this.props.currentUser} modal={this.props.modal} openModal={this.props.openModal}/>
            <ul>
              {this.props.posts.map( (post) => {
                if (post.authorId === post.profileId) {
                  return <li key={post.id}><PostIndexItem fetchLikes={this.props.fetchLikes} deleteComment={this.props.deleteComment} likes={this.props.likes} comments={this.props.comments} fetchComments={this.props.fetchComments} deletePost={this.props.deletePost} currentUser={this.props.currentUser} fetchAuthor={this.props.fetchAuthor} post={post} /></li>
                }
              })}
            </ul>
          </div>
        </div>
        <div className='feed-left-side'>
          <OtherProjects />
        </div>
        <div className="feed-right-side">
          <SuggestedFriendsContainer />
        </div>
      </div> 
    )
  }
}

export default FeedIndex