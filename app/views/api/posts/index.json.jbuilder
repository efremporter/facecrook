json.array! @posts do |post|
  json.extract! post, :id, :author_id, :profile_id, :body, :created_at
  if post.photo.attached?
    json.photoUrl url_for(post.photo)
  else
    json.photoUrl nil
  end
end
