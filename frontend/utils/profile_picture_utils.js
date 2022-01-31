export const fetchProfilePicture = userId => {
  return $.ajax({
    method: 'GET',
    url: `/api/picture/${userId}`,
    data: {user_id: userId}
  })
}

export const createProfilePicture = picture => {
  return $.ajax({
    method: 'POST',
    url: '/api/picture',
    data: {picture}
  })
}

export const updateProfilePicture = picture => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/picture/${picture.id}`,
    data: {picture}
  })
}

