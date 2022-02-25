import * as PostUtils from '../utils/post_utils'

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const RECEIVE_POST = 'RECEIVE_POST'
export const REMOVE_POST = 'REMOVE_POST'

const receivePosts = posts => {
  console.log(posts)
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