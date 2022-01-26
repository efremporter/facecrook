export const postUser = user => {
  return $.ajax({
    method: 'POST',
    url: '/api/users',
    data: {user}
  })
}

export const postSession = user => {
  console.log('user')
  return $.ajax({
    method: 'POST',
    url: '/api/session',
    data: {user}
  })
}

export const deleteSession = () => {
  return $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
}