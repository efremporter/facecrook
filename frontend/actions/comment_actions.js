import * as CommentAPIUtils from '../utils/comment_utils';

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const CLEAR_COMMENTS = 'CLEAR_COMMENTS';

const receiveComments = comments => {
  return {
    type: RECEIVE_COMMENTS,
    comments
  }
}

const receiveComment = comment => {
  return {
    type: RECEIVE_COMMENT,
    comment
  }
}

const removeComment = commentId => {
  return {
    type: REMOVE_COMMENT, 
    commentId
  }
}

const removeComments = postId => {
  return {
    type: CLEAR_COMMENTS,
    postId
  }
}

export const clearComments = () => dispatch => {
  dispatch(removeComments())
}

export const fetchComments = postId => dispatch => {
  return CommentAPIUtils.fetchComments(postId)
  .then( comments => dispatch(receiveComments(comments)))
}

export const createComment = comment => dispatch => {
  return CommentAPIUtils.createComment(comment)
  .then( comment => dispatch(receiveComment(comment)))
}

export const deleteComment = commentId => dispatch => {
  return CommentAPIUtils.deleteComment(commentId)
  .then ( () => dispatch(removeComment(commentId)))
}
