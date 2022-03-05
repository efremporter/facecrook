import * as LikeAPIUtil from '../utils/like_utils';

export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const RECEIVE_LIKES = 'RECEIVE_LIKES';
export const REMOVE_LIKE = 'REMOVE_LIKE';
export const CLEAR_LIKES = 'CLEAR_LIKES';

const receiveLikes = likes => {
  return {
    type: RECEIVE_LIKES,
    likes
  }
}

const receiveLike = like => {
  return {
    type: RECEIVE_LIKE,
    like
  }
}

const deleteLike = id => {
  return {
    type: REMOVE_LIKE,
    id
  }
}

export const clearLikes = () => dispatch => {
  dispatch({type: CLEAR_LIKES})
}

export const fetchPostLikes = postId => dispatch => {
  return LikeAPIUtil.fetchPostLikes(postId)
  .then( likes => dispatch(receiveLikes(likes)))
}

export const fetchUserLikes = userId => dispatch => {
  return LikeAPIUtil.fetchUserLikes(userId)
  .then( likes => dispatch(receiveLikes(likes)))
}

export const createLike = like => dispatch => {
  return LikeAPIUtil.createLike(like)
  .then( like => dispatch(receiveLike(like)))
}

export const removeLike = id => dispatch => {
  return LikeAPIUtil.removeLike(id)
  .then( () => dispatch(deleteLike(id)))
}