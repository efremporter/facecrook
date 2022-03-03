import React from "react";
import { Link } from "react-router-dom";
import CommentIndexContainer from "../comments/comments_index_container";
import CommentFormContainer from "../comments/comment_form_container";

class PostIndexItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {author: null, showComments: false}
  }

  componentDidMount() {
    this.props.fetchAuthor(this.props.post.authorId)
    .then(author => {this.setState({author})})
    this.props.fetchComments(this.props.post.id)
  }

  componentWillUnmount() {
    this.props.clearComments();
  }

  getAuthorName() {
    const author = this.state.author;
    if (!this.props.user) {
      return <div className="name-profile-post"><Link to={`/users/${author.id}`} className="name-profile-post-link">{author.firstName} {author.lastName}</Link></div>
    }
    if (author.id === this.props.user.id) {
      return <div className="name-profile-post">{author.firstName} {author.lastName}</div>
    } else {
      return <div className="name-profile-post">
        <Link to={`/users/${author.id}`} className="name-profile-post-link">
          {author.firstName} {author.lastName}
        </Link> <img className="post-right-arrow" src={window.rightArrow} /> {this.props.user.firstName} {this.props.user.lastName}
        </div>
    }
  }


  translateMonthIntoWord(monthNumber) {
    let monthString;

    monthNumber === '01' ? monthString = 'January' : null
    monthNumber === '02' ? monthString = 'February' : null
    monthNumber === '03' ? monthString = 'March' : null
    monthNumber === '04' ? monthString = 'April' : null
    monthNumber === '05' ? monthString = 'May' : null
    monthNumber === '06' ? monthString = 'June' : null
    monthNumber === '07' ? monthString = 'July' : null
    monthNumber === '08' ? monthString = 'August' : null
    monthNumber === '09' ? monthString = 'September' : null
    monthNumber === '10' ? monthString = 'October' : null
    monthNumber === '11' ? monthString = 'November' : null
    monthNumber === '12' ? monthString = 'December' : null

    return monthString;
  } 

  getPostDate(dateString) {
    const year = dateString.slice(0, 4)
    const month = this.translateMonthIntoWord(dateString.slice(5, 7))
    const day = dateString.slice(8, 10)
    return `${month} ${day}, ${year}`
  }

  getDelete() {
    if (this.props.currentUser.id === this.props.post.authorId || this.props.currentUser.id === this.props.post.profileId)
    {
      return <div className="post-delete-dots">
        <span className="profile-delete-dots-span">...</span>
        <div onClick={this.deletePost.bind(this)} className="delete-post-button"><img className="delete-post-icon" src={window.trashCan} /></div>
      </div>
    } else {
      return null;
    }
  }

  getLink(str) {
    if (str === 'date') {
      if (!this.props.user) {
        return <Link to={`/users/${this.props.post.authorId}`} className="profile-date-time-other-link"><span className="profile-date-time">{this.getPostDate(this.props.post.createdAt)}</span></Link>
      }
      if (this.props.post.authorId === this.props.post.profileId) {
        return <span className="profile-date-time">{this.getPostDate(this.props.post.createdAt)}</span>
      } else {
        return <Link to={`/users/${this.props.post.authorId}`} className="profile-date-time-other-link"><span className="profile-date-time">{this.getPostDate(this.props.post.createdAt)}</span></Link>
      }
    } else if (str ==='profile-pic') {
      if (!this.props.user) {
        return <Link to={`/users/${this.props.post.authorId}`} className="mini-profile-pic-post-link"><img className="mini-profile-pic-post" src={this.state.author.profilePictureUrl}/></Link>
      }
      if (this.props.post.authorId === this.props.post.profileId) {
        return  <img className="mini-profile-pic-post" src={this.state.author.profilePictureUrl}/>
      } else {
        return <Link to={`/users/${this.props.post.authorId}`} className="mini-profile-pic-post-link"><img className="mini-profile-pic-post" src={this.state.author.profilePictureUrl}/></Link>
      }
    }
  }

  deletePost() {
    this.deleteComments()
    this.props.deletePost(this.props.post.id)
  }

  deleteComments() {
    if (this.props.comments) {
      this.props.comments.forEach( comment => {
        this.props.deleteComment(comment.id)
      })
    } 
  }

  getOpenCommentsButton() {
    let numberOfComments = 0;
    if (this.props.comments) {
      this.props.comments.forEach( comment => {
        if (comment.postId === this.props.post.id) numberOfComments += 1;
      })
      if (numberOfComments === 1) {
        return <span onClick={this.toggleComments.bind(this)} className="open-comments-button">1 Comment</span>
      } else if (numberOfComments > 1) {
        return <span onClick={this.toggleComments.bind(this)} className="open-comments-button">{numberOfComments} Comments</span>
      } else {
        return null;
      }
    } else {
      return null;
    }
  }

  toggleComments() {
    if (this.state.showComments) {
      this.setState({showComments: false})
    } else {
      this.setState({showComments: true})
    }
  }

  showComments() {
    if (this.state.showComments) {
      return <CommentIndexContainer currentUser={this.props.currentUser} fetchComments={this.props.fetchComments} comments={this.props.comments} post={this.props.post}/>
    } else {
      return null;
    }
  }

  render() {
    if (!this.state.author) return null;
    return (
      <div className="profile-post-container">
        {this.getLink('profile-pic')}
        {this.getAuthorName()}
        {this.getLink('date')}
        <br />
        {this.getDelete()}
        <div className="profile-post-body">{this.props.post.body}</div>
        <img className="post-attached-photo" src={this.props.post.photoUrl}></img>
        {this.getOpenCommentsButton()}
        {this.showComments()}
        <CommentFormContainer currentUser={this.props.currentUser} postId={this.props.post.id}/>
      </div>
    )
  }
}
export default PostIndexItem