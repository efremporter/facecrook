export const fetchUser = userId => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${userId}`
  })
}

export const patchUser = user => {
  let formData = new FormData();

  if (user.profilePicture) {
    formData.append("user[profile_picture]", user.profilePicture)
  }

  if (user.profileCoverPhoto) {
    formData.append("user[profile_cover_photo]", user.profileCoverPhoto)
  }

  return $.ajax({
    method: 'PATCH',
    url: `/api/users/${user.id}`,
    data: formData,
    processData: false,
    contentType: false
  })
}