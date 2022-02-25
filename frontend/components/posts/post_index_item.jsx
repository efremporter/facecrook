import React from "react";

class PostIndexItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {author: {}}
  }

  componentDidMount() {
    this.props.fetchAuthor(this.props.post.authorId).then(author => {
      this.setState({author})
    })
  }

  getAuthorName() {
    const author = this.state.author;
    if (this.state.author.id === this.props.user.id) {
      return <div className="name-profile-post">{author.firstName} {author.lastName}</div>
    } else {
      return <div className="name-profile-post">{author.firstName} {author.lastName} <img className="post-right-arrow" src={window.rightArrow} /> {this.props.user.firstName} {this.props.user.lastName}</div>
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
    console.log(dateString)
    const year = dateString.slice(0, 4)
    const month = this.translateMonthIntoWord(dateString.slice(5, 7))
    const day = dateString.slice(8, 10)
    return `${month} ${day}, ${year}`
  }

  render() {
    const date = this.props.post.createdAt.slice(0, 10)
    window.date = this.props.post.createdAt;
    this.getPostDate(window.date)
    return (
      <div className="profile-post-container">
        <img className="mini-profile-pic-post" src={this.props.user ? this.state.author.profilePictureUrl : null}/>
        {this.getAuthorName()}
        <div className="profile-date-time">{this.getPostDate(this.props.post.createdAt)}</div>
        <br />
        <div className="profile-post-body">{this.props.post.body}</div>
        <br />
      </div>
    )
  }
}

// const PostIndexItem = ({user, post, fetchAuthor}) => {
//   let arrow = true;
//   if (user.id === post.authorId) arrow = false;
//   const author = fetchAuthor(post.authorId).then(author => {return author})
//   console.log(author.firstName)
//   return (
//     <div className="profile-post-container">
//       <img className="mini-profile-pic-post" src={user.photoUrl}/>
//       <div className="name-profile-post">{author.firstName}aaa</div>
//       {/* {user.lastName} {arrow ? window.rightArrow : null} {arrow ? user.f}</div> */}
//       <br />
//       {post.body}
//       <br />
//       {/* <img src={post.photoUrl}/> */}
//     </div>
//   )
// }

export default PostIndexItem