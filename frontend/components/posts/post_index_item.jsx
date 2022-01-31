import React from "react";

const PostIndexItem = ({post}) => {
  if (post.photoUrl) {
    return (
      <div>
        {post.id}
        <img src={post.photoUrl}/>
      </div>
    )
  } else {
    return (
      <div>
        {post.id}
      </div>
    )
  }
}

export default PostIndexItem