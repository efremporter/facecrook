import React from "react";

class PostIndexItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {author: {}}
  }

  componentDidMount() {
    this.props.fetchAuthor(this.props.post.authorId).then(author => {
      // this.state.posts[author.id] = author
      this.setState({author})
    })
  }

  render() {
    const author = this.state.author;
    const date = this.props.post.createdAt.slice(0, 10)
    window.date = this.props.post.createdAt;
    return (
      <div className="profile-post-container">
        <img className="mini-profile-pic-post" src={this.props.user ? this.props.user.photoUrl : null}/>
        <div className="name-profile-post">{author.firstName} {author.lastName}</div>
        <div className="profile-date-time">{date}</div>
        <br />
        <div className="profile-post-body">{this.props.post.body}</div>
        <br />
        {/* <img src={post.photoUrl}/> */}
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