import * as PostUtils from '../utils/post_utils'

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const RECEIVE_POST = 'RECEIVE_POST'
export const DELETE_POST = 'DELETE POST'

const receivePosts = posts => {
  return {
    type: RECEIVE_POSTS,
    posts
  }
}

const receivePost = post => {
  return {
    type: RECEIVE_POST,
    post
  }
}

const removePost = postId => {
  return {
    type: DELETE_POST,
    postId
  }
}

export const fetchPosts = authorId => dispatch => {
  return PostUtils.fetchPosts(authorId)
  .then( posts => {dispatch(receivePosts(posts))
  console.log(posts)})
}

export const fetchPost = postId => dispatch => {
  return PostUtils.fetchPost(postId)
  .then( post => dispatch(receivePost(post)))
}

export const createPost = post => dispatch => {
  return PostUtils.createPost(post)
  .then( post => dispatch(receivePost(post)))
}

export const updatePost = post => dispatch => {
  return PostUtils.updatePost(post)
  .then( post => dispatch(receivePost(post)))
}

export const deletePost = postId => dispatch => {
  return PostUtils.deletePost(postId)
  .then( () => dispatch(removePost(postId)))
}