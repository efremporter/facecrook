export const fetchAllPosts = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/posts'
  })
}

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
  let formData = new FormData();
  formData.append("post[body]", post.body)
  formData.append("post[author_id]", post.authorId)
  formData.append("post[profile_id]", post.profileId)
  if (post.photo) formData.append("post[photo]", post.photo)

  return $.ajax({
    method: 'POST',
    url: '/api/posts',
    data: formData,
    processData: false,
    contentType: false
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