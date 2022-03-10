import * as FriendAPIUtil from '../utils/friend_utils';
export const RECEIVE_FRIENDS = 'RECEIVE_FRIENDS';
export const RECEIVE_FRIEND = 'RECEIVE_FRIEND';
export const REMOVE_FRIEND = 'REMOVE_FRIEND';

const receiveFriends = friends => {
  return {
    type: RECEIVE_FRIENDS,
    friends
  }
}

const receiveFriend = friend => {
  return {
    type: RECEIVE_FRIEND,
    friend
  }
}

const removeFriend = id => {
  return {
    type: REMOVE_FRIEND,
    id
  }
}

export const getFriends = (id) => dispatch => {
  return FriendAPIUtil.getFriends(id)
  .then( friends => dispatch(receiveFriends(friends)))
}

export const createFriend = friend => dispatch => {
  return FriendAPIUtil.createFriend(friend)
  .then( friend => dispatch(receiveFriend(friend)))
}

export const updateFriend = friend => dispatch => {
  return FriendAPIUtil.updateFriend(friend)
  .then( friend => dispatch(receiveFriend(friend)))
}

export const deleteFriend = id => dispatch => {
  return FriendAPIUtil.removeFriend(id)
  .then( () => dispatch(removeFriend(id)))
}