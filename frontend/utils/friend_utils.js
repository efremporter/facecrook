export const getFriends = user_id => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${user_id}/friends`,
  })
}

export const updateFriend = friend => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/friends/${friend.id}`,
    data: {friend: {user_id: friend.userId, friend_id: friend.friendId, status: friend.status}}
  })
}

export const createFriend = friend => {
  return $.ajax({
    method: 'POST',
    url: `/api/friends`,
    data: {friend: {user_id: friend.userId, friend_id: friend.friendId, status: friend.status}}
  })
}

export const removeFriend = id => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/friends/${id}`
  })
}