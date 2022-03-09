export const getFriendStatus = (userId, friendId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${userId}/friends`,
    data: {friend: {user_id: userId, friend_id: friendId}}
  })
}

export const createFriend = friend => {
  return $.ajax({
    method: 'POST',
    url: `/api/friends`,
    data: friend
  })
}

export const removeFriend = id => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/friends/${id}`
  })
}