import * as PostUtils from '../utils/post_utils'

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const RECEIVE_POST = 'RECEIVE_POST'
export const REMOVE_POST = 'REMOVE_POST'
export const CLEAR_POSTS = 'CLEAR_POSTS'

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
    type: REMOVE_POST,
    postId
  }
}

const removePosts = () => {
  return {
    type: CLEAR_POSTS
  }
}

export const clearPosts = () => dispatch => {
  dispatch(removePosts())
}

export const fetchAllPosts = () => dispatch => {
  return PostUtils.fetchAllPosts()
  .then( posts => dispatch(receivePosts(posts)))
}

export const fetchPosts = profileId => dispatch => {
  return PostUtils.fetchPosts(profileId)
  .then( posts => dispatch(receivePosts(posts)))
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