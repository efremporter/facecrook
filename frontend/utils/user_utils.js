export const fetchUser = userId => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${userId}`
  })
}

export const patchUser = user => {
  let formData = new FormData();
  console.log(user.photoUrl)
  formData.append("user[photo]", user.photoUrl)
  return $.ajax({
    method: 'PATCH',
    url: `/api/users/${user.id}`,
    data: formData,
    processData: false,
    contentType: false
  })
}