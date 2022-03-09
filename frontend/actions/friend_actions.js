import * as FriendAPIUtil from '../utils/friend_utils';
export const RECEIVE_FRIENDS = 'RECEIVE_FRIENDS';
export const RECEIVE_FRIEND = 'RECEIVE_FRIEND';
export const REMOVE_FRIEND = 'REMOVE_FRIEND';

const receiveFriends = friends => {
  return {
    method: RECEIVE_FRIENDS,
    friends
  }
}

const receiveFriend = friend => {
  return {
    method: RECEIVE_FRIEND,
    friend
  }
}

const removeFriend = id => {
  return {
    method: REMOVE_FRIEND,
    id
  }
}

export const getFriendStatus = (userId, friendId) => {
  return FriendAPIUtil.getFriendStatus(userId, friendId)
  // .then( friends => dispatch(receiveFriends(friends)))
}

export const createFriend = friend => dispatch => {
  return FriendAPIUtil.createFriend(friend)
  .then( friend => dispatch(receiveFriend(friend)))
}

export const deleteFriend = id => dispatch => {
  return FriendAPIUtil.removeFriend(id)
  .then( () => dispatch(removeFriend(id)))
}