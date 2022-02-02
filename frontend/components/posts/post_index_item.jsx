import React from "react";

const PostIndexItem = ({post}) => {
  if (post.photoUrl) {
    return (
      <div>
        <div>Post id: {post.id}</div>
        {post.body}
        <br />
        <img src={post.photoUrl}/>
      </div>
    )
  } else {
    return (
      <div>
        <div>Post id: {post.id}</div> 
        {post.body}
      </div>
    )
  }
}

export default PostIndexItem