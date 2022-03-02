import React from "react";
import { Link } from "react-router-dom";

class FeedIndexItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {author: {}}
  }

  componentDidMount() {
    this.props.fetchAuthor(this.props.post.authorId)
    .then(author => {
      this.setState({author})})
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
        <div onClick={this.deletePost.bind(this)} className="delete-post-button">Delete</div>
      </div>
    } else {
      return null;
    }
  }

  deletePost() {
    this.props.deletePost(this.props.post.id)
  }

  render() {
    return (
      <div className="profile-post-container">
        <Link to={`/users/${this.state.author.id}`}><img className="mini-profile-pic-post" src={this.state.author ? this.state.author.profilePictureUrl : null}/></Link>
        <div className="name-profile-post"><Link to={`/users/${this.state.author.id}`} className="name-profile-post-link">{this.state.author.firstName} {this.state.author.lastName}</Link></div>
        <Link to={`/users/${this.state.author.id}`}></Link><div className="profile-date-time">{this.getPostDate(this.props.post.createdAt)}</div>
        <br />
        {this.getDelete()}
        <div className="profile-post-body">{this.props.post.body}</div>
        <img className="post-attached-photo" src={this.props.post.photoUrl}></img>
      </div>
    )
  }
}

export default FeedIndexItem