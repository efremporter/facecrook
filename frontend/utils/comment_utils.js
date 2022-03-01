export const fetchComments = postId => {
  $.ajax({
    method: 'GET',
    url: `/api/posts/${postId}/comments`
  })
}

export const createComment = comment => {
  let formData = new FormData();
  formData.append("comment[body]", comment.body)
  formData.append("comment[author_id]", comment.authorId)
  formData.append("comment[post_id]", comment.postId)
  if (comment.photo) formData.append("comment[photo]", post.photo)

  $.ajax({
    method: 'POST',
    url: `/api/posts/${comment.postId}/comments`,
    data: formData,
    processData: false,
    contentType: false
  })
}

export const deleteComment = commentId => {
  $.ajax({
    method: 'DELETE',
    url: `/api/comments/${commentId}`,
  })
}