export const fetchUserLikes = likerId => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${likerId}/likes`
  })
}

export const fetchPostLikes = postId => {
  return $.ajax({
    method: 'GET',
    url: `/api/posts/${postId}/likes`
  })
}

export const createLike = like => {
  return $.ajax({
    method: 'POST',
    url: `/api/posts/${like.postId}/likes`,
    data: {
      like: {liker_id: like.likerId, post_id: like.postId}
    }
  })
}

export const removeLike = id => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/likes/${id}`
  })
}