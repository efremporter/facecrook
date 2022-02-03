import React from "react";

const PostIndexItem = ({user, post, fetchAuthor}) => {
  let arrow = true;
  if (user.id === post.authorId) arrow = false;
  const author = fetchAuthor(post.authorId).then(author => {return author})
  console.log(author.firstName)
  return (
    <div className="profile-post-container">
      <img className="mini-profile-pic-post" src={user.photoUrl}/>
      <div className="name-profile-post">{author.firstName}aaa</div>
      {/* {user.lastName} {arrow ? window.rightArrow : null} {arrow ? user.f}</div> */}
      <br />
      {post.body}
      <br />
      {/* <img src={post.photoUrl}/> */}
    </div>
  )
}

export default PostIndexItem