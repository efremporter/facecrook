export const fetchPosts = profileId => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${profileId}/posts`,
    data:{profile_id: profileId}
  })
}

export const fetchPost = postId => {
  return $.ajax({
    method: 'GET',
    url: `api/posts/${postId}`,
    data: {post_id: postId}
  })
}

export const createPost = post => {
  return $.ajax({
    method: 'POST',
    url: '/api/posts',
    data: {post}
  })
}

export const updatePost = post => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/posts/${post.id}`,
    data: {post}
  })
}

export const deletePost = postId => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/posts/${postId}`
  })
}